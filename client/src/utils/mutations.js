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

// Add comment route adds a new comment to the array of comments for the review and return the id of the review as well as the full array of comments
export const ADD_COMMENT = gql`
  mutation addComment($id: String!, $text: String) {
    addComment(_id: $id, text: $text) {
      _id
      comments {
        _id
        text
        username
      }
    }
  }
`;

// Delete comment route deletes the comment and returns the array of comments with the review id
export const DELETE_COMMENT = gql`
  mutation deleteComment($id: String!, $reviewId: String!) {
    deleteComment(_id: $id, reviewId: $reviewId) {
      _id
      comments {
        _id
        text
        username
      }
    }
  }
`;

// Like route like sthe review id provided and add the user's username to the liked array, it returns the like with the id, review id, like count and the array of users
// FYI THIS CAN CREATE DUPLICATE ENTRIES FOR THE USER TO LIKE, THIS CHECK NEED TO BE DONE IN THE FRONT END
export const LIKE = gql`
  mutation like($reviewId: ID!) {
    like(reviewId: $reviewId) {
      _id
      likes_count
      reviewId {
        _id
      }
      users
    }
  }
`;

// Unlike route reduces the like count by one and deleted all users that match the logged in user from the array, it return the like id, review id, like count and users array
// FYI IF BY ANY CHANCE THE USER LIKED MULTIPLE TIMES, IT ONLY REDUCES IT BY ONE, BUT IT DELETED ALL ARRAY ITEMS WITH THEIR USERNAME
export const UNLIKE = gql`
  mutation unlike($id: ID!) {
    unlike(_id: $id) {
      _id
      likes_count
      reviewId {
        _id
      }
      users
    }
  }
`;
