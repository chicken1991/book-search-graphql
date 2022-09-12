const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    bookId: String
    authors: [String]
    description: String
    image: String
    link: String
  }

  type Auth {
    token: String
    user: [User]
  }

  type Query {
    users: [User]
    books: [Book]
  }
`;

module.exports = typeDefs;
