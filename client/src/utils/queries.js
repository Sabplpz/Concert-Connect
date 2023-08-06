import { gql } from "@apollo/client";

export const QUERY_ALL_REVIEWS = gql`
  query AllReviews {
    reviews {
      type
      title
      starRating
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

