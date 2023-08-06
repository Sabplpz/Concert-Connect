const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
    concerts: [Concert]
    artists: [Artist]
    venues: [Venue]
    reviews: [Review]
    follow: [User]
  }

  type Concert {
    _id: ID
    concertName: String!
    city: String!
    date: String!
    artist: Artist
    venue: Venue
    genre: String
  }

  type Artist {
    _id: ID
    artistName: String!
    concerts: [Concert]
    }

  type Venue {
    _id: ID
    venueName: String!
    city: String!
  }

  type Review {
    _id: ID
    type: String!
    title: String!
    starRating: Int!
    text: String
    username: String
    comments: [Comments]
    likes: String
  }

  type Comments {
    _id: ID
    text: String
    username: String
  }

  type Likes {
    _id: ID
    reviewId: Review
    likes_count: Int
    users: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    concert(_id: String!): Concert
    concerts: [Concert]
    artists: User
    venues: User
    review(_id: String!): Review
    reviews: [Review]
    comments: [Comments]
    likes(_id: String!): Likes
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(
      firstName: String!
      lastName: String!
      username: String!
      email: String!
      password: String!
    ): Auth
    addConcert(
      artistName: String!
      concertName: String!
      venueName: String!
      city: String!
      date: String!
      genre: String
    ): Concert
    deleteConcert(_id: ID!): User
    addReview(
      type: String!
      title: String!
      starRating: Int!
      text: String
      username: String
    ): Review
    updateReview(_id: ID!, starRating: Int!, text: String): Review
    deleteReview(_id: ID!): User
    followUser(username: String!): User
    unfollowUser(_id: String!): User
    addComment(_id: String!, text: String): Review
    deleteComment(_id: String!, reviewId: String!): Review
    like(reviewId: ID!): Likes
    unlike(_id: ID!): Likes
  }
`;

module.exports = typeDefs;
