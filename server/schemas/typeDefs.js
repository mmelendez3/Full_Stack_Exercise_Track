// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Exercise {
    _id: ID
    description: String
    date: String
    username: String
    duration: Int
  }
  type User {
    _id: ID
    username: String
    email: String
    exercises: [Exercise]
  }
    type Query {
      me: User
      users: [User]
      user(username: String!): User
      exercises(username: String): [Exercise]
      exercise(_id: ID!): Exercise
    }
    type Mutation {
        login(email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      addExercise(description: String!): User
      removeExercise(description: String!): User
      }
      type Auth {
        token: ID!
        user: User
      }

`;

// export the typeDefs
module.exports = typeDefs;