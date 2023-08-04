const { AuthenticationError } = require("apollo-server-express");
const { User, Artist, Concert, Venue, Review } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({
          _id: context.user._id,
        })
          .populate("concerts")
          .populate("artists")
          .populate("venues")
          .populate("follow")
          .populate("reviews")
          .select("-__v -password");
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    concert: async (parent, args) => {
      return Concert.findOne({ _id: args._id });
    },
    concerts: async () => {
      return await Concert.find();
    },
    artists: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("artists");
      }
      throw new AuthenticationError("You must log in");
    },
    venues: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("venues");
      }
      throw new AuthenticationError("You must log in");
    },
    review: async (parent, args) => {
      return Review.findOne({ _id: args._id });
    },
    reviews: async () => {
      return await Review.find();
    },
  },

  Mutation: {
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addConcert: async (
      parent,
      { artistName, concertName, venueName, city, date, genre },
      context
    ) => {
      if (context.user) {
        const artistLookUp = async () => {
          const checkArtist = await Artist.exists({ artistName: artistName });
          if (checkArtist === null) {
            let artistData = await Artist.create({ artistName });
            return artistData._id;
          } else {
            return checkArtist;
          }
        };
        const artistId = await artistLookUp();

        const venueLookUp = async () => {
          const checkVenue = await Venue.exists({ venueName: venueName });
          if (checkVenue === null) {
            let venueData = await Venue.create({ venueName, city });
            return venueData._id;
          } else {
            return checkVenue;
          }
        };
        const venueId = await venueLookUp();

        let addedConcert = {
          concertName,
          city,
          date,
          genre,
          artist: artistId,
          venue: venueId,
        };

        const concertLookUp = async () => {
          const checkConcert = await Concert.exists({
            concertName: addedConcert.concertName,
            city: addedConcert.city,
            date: addedConcert.date,
          });
          if (checkConcert === null) {
            let concertData = await Concert.create(addedConcert);
            return concertData._id;
          } else {
            return checkConcert;
          }
        };
        const concertId = await concertLookUp();
        const concert = await Concert.findOne({ _id: concertId });
        await User.findByIdAndUpdate(
          context.user._id,
          {
            $push: { concerts: concertId },
          },
          { new: true }
        );
        return concert;
      }
      throw new AuthenticationError("You must log in");
    },
    deleteConcert: async (parent, args, context) => {
      if (context.user) {
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { concerts: args._id } }
        );
        const concerts = await User.findOne({ _id: context.user._id }).populate(
          "concerts"
        );
        return concerts;
      }
      throw new AuthenticationError("You must log in");
    },
    // addArtist: async (parent, args, context) => {
    //   if (context.user) {
    //     let savedArtist = await Artist.findOne({
    //       _id: args.id,
    //     });
    //     await User.findByIdAndUpdate(context.user._id, {
    //       $push: { artists: savedArtist },
    //     });
    //     return;
    //   }
    //   throw new AuthenticationError("You must log in");
    // },
    // deleteArtist: async (parent, args, context) => {
    //   if (context.user) {
    //     const artist = await Artist.findOne({
    //       _id: args.id,
    //     });
    //     await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { artists: artist._id } }
    //     );
    //     return artist;
    //   }
    //   throw new AuthenticationError("You must log in");
    // },
    // addVenue: async (parent, args, context) => {
    //   if (context.user) {
    //     let savedVenue = await Venue.findOne({
    //       _id: args.id,
    //     });
    //     await User.findByIdAndUpdate(context.user._id, {
    //       $push: { venues: savedVenue },
    //     });
    //     return;
    //   }
    //   throw new AuthenticationError("You must log in");
    // },
    // deleteVenue: async (parent, args, context) => {
    //   if (context.user) {
    //     const venue = await Venue.findOne({
    //       _id: args.id,
    //     });
    //     await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { venues: venue._id } }
    //     );
    //     return venue;
    //   }
    //   throw new AuthenticationError("You must log in");
    // },
    addReview: async (parent, args, context) => {
      if (context.user) {
        let savedReview = await Review.create({
          type: args.type,
          title: args.title,
          starRating: args.starRating,
          username: context.user.username,
        });
        await User.findByIdAndUpdate(context.user._id, {
          $push: { reviews: savedReview._id },
        });
        return savedReview;
      }
      throw new AuthenticationError("You must log in");
    },
    updateReview: async (parent, args, context) => {
      if (context.user) {
        let updatedReview = await Review.findOneAndUpdate(
          {
            _id: args._id,
            username: context.user.username,
          },
          { title: args.name, starRating: args.starRating, text: args.text },
          {
            new: true,
          }
        );
        return updatedReview;
      }
      throw new AuthenticationError("You must log in");
    },
    deleteReview: async (parent, args, context) => {
      if (context.user) {
         await Review.findOneAndDelete({
          _id: args._id,
          username: context.user.username,
        });
        let updatedReviews = await User.findByIdAndUpdate(context.user._id, {
          $pull: { reviews: args._id },
        }).populate("reviews");
        return updatedReviews;
      }
      throw new AuthenticationError("You must log in");
    },
    followUser: async (parent, args, context) => {
      if (context.user) {
        let newFriend = await User.findOne({
          username: args.username,
        });
        await User.findByIdAndUpdate(context.user._id, {
          $push: { follow: newFriend._id },
        });
        return newFriend;
      }
      throw new AuthenticationError("You must log in");
    },
    unfollowUser: async (parent, args, context) => {
      if (context.user) {
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { follow: args._id } }
        );
        const following = await User.findOne({
          _id: context.user._id,
        }).populate("follow");

        return following;
      }
      throw new AuthenticationError("You must log in");
    },
  },
};

module.exports = resolvers;
