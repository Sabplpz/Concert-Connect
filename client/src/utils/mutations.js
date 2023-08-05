import { gql } from "@apollo/client";

// Login route returns your token, id and username
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

// Add user route returns your token, id and username (like login but creating a new user)
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

// Add a concert route returns the new/preexisting concert's id with the artist id, venue id, and all concert information
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

// Delete a concert route will only delete from the users array, concert will still exist with Conceryt in the db
// this returns the updated array of the user's concerts
export const DELETE_CONCERT = gql`
mutation deleteConcert($id: ID!) {
  deleteConcert(_id: $id) {
    concerts {
      _id
      concertName
      artist {
        _id
      }
      city
      date
      genre
      venue {
        _id
      }
    }
  }
}
`;

// Folow user route returns the id and username of the person that was followed (can be modified to return a list of the user's follows)
export const FOLLOW_USER = gql`
  mutation followUser($username: String!) {
    followUser(username: $username) {
      _id
      username
    }
  }
`;

// Unfollow a user route return a list of the user's follows after the one has been deleted
export const UNFOLLOW_USER = gql`
  mutation unfollowUser($id: String!) {
    unfollowUser(_id: $id) {
      _id
      username
      follow {
        _id
        username
      }
    }
  }
`;

// Add review route returns all properties of the review, even if null (ex text)
export const ADD_REVIEW = gql`
  mutation addReview(
    $type: String!
    $title: String!
    $starRating: Int!
    $text: String
  ) {
    addReview(
      type: $type
      title: $title
      starRating: $starRating
      text: $text
    ) {
      _id
      starRating
      text
      title
      type
      username
    }
  }
`;

// Update review route returns all properties of teh review after update
export const UPDATE_REVIEW = gql`
  mutation updateReview($id: ID!, $starRating: Int!, $text: String) {
    updateReview(_id: $id, starRating: $starRating, text: $text) {
      _id
      starRating
      text
      title
      type
      username
    }
  }
`;

// Delete review route returns the array of the user's reviews after the one has been deleted, array empty if necessary
export const DELETE_REVIEW = gql`
  mutation deleteReview($id: ID!) {
    deleteReview(_id: $id) {
      reviews {
        _id
        starRating
        text
        title
        type
        username
      }
    }
  }
`;
