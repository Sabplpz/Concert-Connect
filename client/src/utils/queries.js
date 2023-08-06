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
