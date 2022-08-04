const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    records: [Record]
    comments: [Comment]
  }


  type Comment {
    _id: ID
    commentText: String
    username: String
    createdAt: String
  }

type Record {
  _id: ID
  title: String
  artist: String
  comments: [Comment]
}


  type Query {
    helloWorld: String
  }
`;

// export the typeDefs

module.exports = typeDefs;
