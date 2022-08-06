import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query posts($username: String) {
    posts(username: $username) {
      _id
      postText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

export const QUERY_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      postText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;
//Query Record
export const QUERY_RECORD = gql`
  query record($id: ID!) {
    record(_id: $id) {
      _id
      title
      artist
      comments {
        commentText
        _id
        createdAt
        username
      }
    }
  }
`;
export const QUERY_RECORDS= gql`
  query records($username: String) {
    records(username: $username) {
        _id
        title
        artist
        comments {
          commentText
          _id
          createdAt
          username
      }
    }
  }
`;


export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
      posts {
        _id
        postText
        createdAt
        reactionCount
      }
      records {
        _id
        title
        artist
      }
      comments{
        _id
        commentText
        createdAt
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
      friendCount
      records {
        _id
        title
        artist
      }
      comments{
        _id
        commentText
        createdAt
      }
      posts {
        _id
        postText
        createdAt
        reactionCount
        reactions {
          _id
          createdAt
          reactionBody
          username
        }
      }
      friends {
        _id
        username
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
      records
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;