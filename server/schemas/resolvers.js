const { AuthenticationError } = require("apollo-server-express");
const {
  User,
  Artist,
  Concert,
  Venue,
  Review,
  Likes,
  Comments,
} = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({
          _id: context.user._id,
        })
          .populate({ path: "concerts", options: { sort: { date: 1 } } })
          .populate("artists")
          .populate("venues")
          .populate("follow")
          .populate("reviews")
          .sort()
          .select("-__v -password");
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    users: async (aprent, args, context) => {
      if (context.user) {
        const usersData = await User.find();
        return usersData;      
      }
      throw new AuthenticationError("Not logged in");
    },
    concert: async (parent, args) => {
      return Concert.findOne({ _id: args._id }).populate("artist").populate("venue");
    },
    concerts: async () => {
      return await Concert.find().populate("artist").populate("venue");
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
      return Review.findOne({ _id: args._id })
        .populate("comments")
        .populate("likes");
    },
    reviews: async () => {
      return await Review.find().populate("likes").populate("comments").sort({_id: -1});
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
            $push: { concerts: concertId, artists: artistId, venues: venueId },
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
    addReview: async (parent, args, context) => {
      if (context.user) {
        const savedReview = await Review.create({
          type: args.type,
          title: args.title,
          starRating: args.starRating,
          text: args.text,
          username: context.user.username,
        });

        let likeData = await Likes.create({
          reviewId: savedReview._id,
          likes_count: 0,
        });

        await Review.findByIdAndUpdate(
          { _id: savedReview._id },
          {
            $push: { likes: likeData._id },
          },
          { new: true }
        );

        await User.findByIdAndUpdate(context.user._id, {
          $push: { reviews: savedReview._id },
        });

        return savedReview;
      }
      throw new AuthenticationError("You must log in");
    },
    updateReview: async (parent, args, context) => {
      if (context.user) {
        const updatedReview = await Review.findOneAndUpdate(
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
        const updatedReviews = await User.findByIdAndUpdate(context.user._id, {
          $pull: { reviews: args._id },
        }).populate("reviews");
        return updatedReviews;
      }
      throw new AuthenticationError("You must log in");
    },
    followUser: async (parent, args, context) => {
      if (context.user) {
        const newFriend = await User.findOne({
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
    addComment: async (parent, args, context) => {
      if (context.user) {
        const newComment = await Comments.create({
          text: args.text,
          username: context.user.username,
        });

        const commentedReview = await Review.findByIdAndUpdate(
          {
            _id: args._id,
          },
          {
            $push: { comments: newComment._id },
          },
          {
            new: true,
          }
        ).populate("comments");

        return commentedReview;
      }
      throw new AuthenticationError("You must log in");
    },
    deleteComment: async (parent, args, context) => {
      if (context.user) {
        const deletedComment = await Comments.findOneAndDelete({
          _id: args._id,
          username: context.user.username,
        });

        const commentedReview = await Review.findByIdAndUpdate(
          {
            _id: args.reviewId,
          },
          {
            $pull: { comments: deletedComment._id },
          }
        ).populate("comments");

        return commentedReview;
      }
    },
    like: async (parent, args, context) => {
      if (context.user) {
        const likeLookUp = async () => {
          let checkLike = await Likes.findOne({
            reviewId: args.reviewId,
          });
          if (checkLike === null) {
            let likeData = await Likes.create({
              reviewId: args.reviewId,
              likes_count: 1,
              users: context.user.username,
            });
            await Review.findByIdAndUpdate(
              { _id: args.reviewId },
              {
                $push: { likes: likeData._id },
              },
              { new: true }
            );
            return likeData;
          } else {
            let newLikesCount = checkLike.likes_count + 1;
            let usersArray = checkLike.users;
            let usersLength = usersArray.length;
            usersArray[usersLength] = context.user.username;
            const updatedLikes = await Likes.findByIdAndUpdate(
              checkLike._id,
              {
                likes_count: newLikesCount,
                users: usersArray,
              },
              {
                new: true,
              }
            );
            return updatedLikes;
          }
        };
        const likes = await likeLookUp();
        return likes;
      }
      throw new AuthenticationError("You must log in");
    },
    unlike: async (parent, args, context) => {
      if (context.user) {
        const likeLookUp = async () => {
          const checkLike = await Likes.findOne({
            reviewId: args.reviewId,
          });
          let currentUsers = checkLike.users;
          const newUsers = currentUsers.filter(function (user) {
            return user !== context.user.username;
          });
          let newLikesCount = checkLike.likes_count - 1;
          const updatedLikes = await Likes.findByIdAndUpdate(checkLike._id, {
            likes_count: newLikesCount,
            users: newUsers,
          });
          return updatedLikes;
        };
        const likes = await likeLookUp();
        return likes;
      }
      throw new AuthenticationError("You must log in");
    },
  },
};

module.exports = resolvers;
