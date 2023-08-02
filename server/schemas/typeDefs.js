const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID!
  firstName: String!
  lastName: String!
  username: String!
  email: String!
  password: String!
  concerts: [Concert]
  artists: [Artist]
  venues: [Venue]
  reviews: [Review]
}

type Concert {
  concertName: String!
  city: String!
  date: String!
  artist: [Artist]
  venue: [Venue]
  genre: String
}

type Artist {
  artistName: String!
  concerts: [Concert]
  genre: String
}

type Review {
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
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(fisrtName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;
