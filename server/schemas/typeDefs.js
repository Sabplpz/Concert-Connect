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
    name: String!
    starRating: Int!
    text: String
    userId: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    follow: User
    concert: Concert
    concerts: [Concert]
    artists: User
    venues: User
    review: Review
    reviews: [Review]
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
    deleteConcert(id: ID!): Concert
    addArtist(artistName: String!): Artist
    deleteArtist(id: ID!): Artist
    addVenue(venueName: String!, city: String!): Venue
    deleteVenue(id: ID!): Venue
    addReview(
      type: String!
      name: String!
      starRating: Int!
      text: String
    ): Review
    updateReview(id: ID!, starRating: Int!, text: String): Review
    deleteReview(id: ID!): Review
    followUser(username: String!): User
    unfollowUser(username: String!): User
  }
`;

module.exports = typeDefs;
