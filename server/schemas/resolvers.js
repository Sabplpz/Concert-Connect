const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    follow: async ( parent, args, context ) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('follow');
      }
      throw new AuthenticationError('You must log in');
    },
    concert: async (parent, args) => {
      return Concert.findOne({ _id: args._id });
    },
    concerts: async () => {
      return await Concert.find();
    },
    artists: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('artists');
      }
      throw new AuthenticationError('You must log in');
    },
    venues: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('venues');
      }
      throw new AuthenticationError('You must log in');
    },
    review: async (parent, args) => {
      return Review.findOne({ _id: args._id });
    },
    reviews: async () => {
      return await Review.find();
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
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
    addConcert: async (parent, { name, city, date, genre }, context) => {
      if (context.user) {
        let addedConcert = { concerName: name, city: city, date: date, genre: genre };
        await User.findByIdAndUpdate(context.user.id, {
          $push: { concerts: addedConcert },
        });
        return addedConcert;
      }
      throw new AuthenticationError('You must log in');
    },
    deleteConcert: async (parent, args, context) => {
      if (context.user) {
        const concert = await Concert.findOne({
          _id: args.id,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { concerts: concert._id } }
        );
        return concert;
      }
      throw new AuthenticationError('You must log in');
    },
    addArtist: async (parent, args, context) => {
      if (context.user) {
        let savedArtist = await Artist.findOne({
          _id: args.id,
        });
        await User.findByIdAndUpdate(context.user._id, { $push: { artists: savedArtist } });
        return ;
      }
      throw new AuthenticationError('You must log in');
    },
    deleteArtist: async (parent, args, context) => {
      if (context.user) {
        const artist = await Artist.findOne({
          _id: args.id,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { artists: artist._id } }
        );
        return artist;
      }
      throw new AuthenticationError('You must log in');
    },
    addVenue: async (parent, args, context) => {
      if (context.user) {
        let savedVenue = await Venue.findOne({
          _id: args.id,
        });
        await User.findByIdAndUpdate(context.user._id, { $push: { venues: savedVenue } });
        return ;
      }
      throw new AuthenticationError('You must log in');
    },
    deleteVenue: async (parent, args, context) => {
      if (context.user) {
        const venue = await Venue.findOne({
          _id: args.id,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { venues: venue._id } }
        );
        return venue;
      }
      throw new AuthenticationError('You must log in');
    },
    addReview: async (parent, args, context) => {
      if (context.user) {
        let savedReview = await Review.findOne({
          _id: args.id,
        });
        await User.findByIdAndUpdate(context.user._id, { $push: { reviews: savedReview } });
        return ;
      }
      throw new AuthenticationError('You must log in');
    },
    updateReview: async (parent, args, context) => { // TEST: I see some problems coming up with this one
      if (context.user) {
        let savedReview = await Review.findOne({
          _id: args.id,
        });
        await User.findByIdAndUpdate(context.user._id, { $push: { reviews: savedReview } });
        return ;
      }
      throw new AuthenticationError('You must log in');
    },
    deleteReview: async (parent, args, context) => {
      if (context.user) {
        const venue = await Venue.findOne({
          _id: args.id,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { venues: venue._id } }
        );
        return venue;
      }
      throw new AuthenticationError('You must log in');
    },
    followUser: async (parent, args, context) => {
      if (context.user) {
        let newFriend = await User.findOne({
          username: args.userName,
        });
        await User.findByIdAndUpdate(context.user._id, { $push: { follow: newFriend } });
        return ;
      }
      throw new AuthenticationError('You must log in');
    },
    unfollowUser: async (parent, args, context) => {
      if (context.user) {
        const somebodyIUsedToKnow = await User.findOne({
          username: args.userName,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { follow: somebodyIUsedToKnow.username } }
        );
        return somebodyIUsedToKnow;
      }
      throw new AuthenticationError('You must log in');
    },
  },
};

module.exports = resolvers;