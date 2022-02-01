import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_EXERCISE = gql`
  mutation addExercise(
    $description: String!
    $date: String!
    $duration: String!
  ) {
    addExercise(description: $description, date: $date, duration: $duration) {
      _id
      description
      date
      username
      duration
    }
  }
`;
