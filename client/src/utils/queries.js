import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query Me {
    me {
      concerts {
        _id
        concertName
        city
        date
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