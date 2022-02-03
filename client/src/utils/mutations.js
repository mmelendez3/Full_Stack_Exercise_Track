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
  mutation addExercise($description: String!, $duration: String!) {
    addExercise(description: $description, duration: $duration) {
      _id
      description
      date
      username
      duration
    }
  }
`;

export const REMOVE_EXERCISE = gql`
  mutation removeExercise($_id: ID!) {
    removeExercise(_id: $ID) {
      _id
    }
  }
`;
