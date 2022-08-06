//To Do
import { gql } from '@apollo/client';

//Query User
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
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

//Query ME 

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
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
//Query ME BASIC

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      records
      }
    }
  }
`;


