import { gql } from '@apollo/client';

export const QUERY_EXERCISE = gql`
  query exercise($username: String) {
    exercise(username: $username) {
      _id
      username
      description
      duration
      date
    }
  }
`;
