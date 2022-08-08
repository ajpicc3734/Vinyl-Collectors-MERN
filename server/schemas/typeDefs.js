const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    posts: [Post]
    records: [Record]
    friends: [User]
  }
  type Post {
    _id: ID
    postText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }
  
  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }
  type Record {
    _id: ID
    title: String
    artist: String
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
    username: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    records(username: String): [Record]
    posts(username: String): [Post]
    post(_id: ID!): Post
    record(_id: ID!): Record

  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!):Auth
    addPost(postText: String!): Post
    addReaction(postId: ID!, reactionBody: String!): Post
    addFriend(friendId: ID!): User
    addRecord(title: String!, artist: String!): Record
    addComment(recordId: ID!, commentText: String!): Record

  }
`;

module.exports = typeDefs;
