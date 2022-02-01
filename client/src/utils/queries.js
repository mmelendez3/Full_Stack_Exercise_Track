import { gql } from '@apollo/client';


export const QUERY_EXERCISES = gql`
  query exercises($username: String) {
    exercises(username: $username) {
      _id
      description
      date
      username
      duration
    }
  }
`;

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

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      exercises {
        _id
        description
        date
        duration
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      exercises {
        _id
        description
        date
        duration
      }
      
    }
  }
`;


export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;
