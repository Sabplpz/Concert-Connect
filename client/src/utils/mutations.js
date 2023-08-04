import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CONCERT = gql`
  mutation addConcert(
    $artistName: String!
    $concertName: String!
    $venueName: String!
    $city: String!
    $date: String!
    $genre: String
  ) {
    addConcert(
      artistName: $artistName
      concertName: $concertName
      venueName: $venueName
      city: $city
      date: $date
      genre: $genre
    ) {
      _id
      artist {
        _id
      }
      city
      concertName
      date
      genre
      venue {
        _id
      }
    }
  }
`;

export const FOLLOW_USER = gql`

`;
