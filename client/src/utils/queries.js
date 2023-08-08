import { gql } from "@apollo/client";

export const QUERY_ALL_REVIEWS = gql`
  query AllReviews {
    reviews {
      _id
      type
      title
      starRating
      username
    }
  }
`;

export const QUERY_USER_REVIEWS = gql`
  query UserReviews {
    userReviews {
      _id
      comments {
        _id
        text
        username
      }
      likes {
        _id
        likes_count
      }
      starRating
      text
      title
      type
      username
    }
  }
`;

export const QUERY_ALL_CONCERTS = gql`
  query concerts {
    concerts {
      _id
      artist {
        _id
        artistName
      }
      city
      concertName
      date
      genre
      venue {
        _id
        city
        venueName
      }
    }
  }
`;

export const QUERY_REVIEW = gql`
  query review($id: String!) {
    review(_id: $id) {
      _id
      comments {
        _id
        text
        username
      }
      likes {
        _id
        likes_count
        users
      }
      starRating
      text
      title
      type
      username
    }
  }
`;

export const QUERY_ME = gql`
  query Me {
    me {
      username
      concerts {
        _id
        concertName
        city
        date
      }
      artists {
        _id
        artistName
      }
      venues {
        _id
        venueName
      }
      follow {
        _id
        username
      }
    }
  }
`;

export const QUERY_VENUE = gql`
  query venues {
    venues {
      _id
      venueName
      city
    }
  }
`;

export const QUERY_CONCERT = gql`
  query concerts {
    concerts {
      _id
      concertName
    }
  }
`;

export const QUERY_AVATARS = gql`
  query avatar {
    users {
      username
      avatar
    }
  }
`;
