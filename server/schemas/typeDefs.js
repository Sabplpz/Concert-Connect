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
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me(_id: String!): User
    concert(_id: String!): Concert
    concerts: [Concert]
    artists: User
    venues: User
    review(_id: String!): Review
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
  }
`;

// addArtist(artistName: String!): Artist
//     deleteArtist(_id: ID!): Artist
//     addVenue(venueName: String!, city: String!): Venue
//     deleteVenue(_id: ID!): Venue

module.exports = typeDefs;
