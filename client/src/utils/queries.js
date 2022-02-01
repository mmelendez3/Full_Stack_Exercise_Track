import { gql } from '@apollo/client';

export const QUERY_EXERCISE = gql`
  query exercise($id: ID!) {
    exercise(_id: $id) {
      _id
      username
      description
      duration
      date
    }
  }
`;
