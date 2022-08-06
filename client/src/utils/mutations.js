import { gql } from '@apollo/client';



//login user
//add user
//add comments
export const ADD_COMMENT = gql`
  mutation addComment($commentId:ID!$commentText: String!) {
    addComment(commentId: $commentId, commentText: $commentText) {
      _id
      comments {
        _id
        commentText
        createdAt
        username
      }
    }
  }
`;
//add records
export const ADD_RECORD = gql`
  mutation addRecord($title: String!) {
    addRecord(title: $title) {
      _id
      title
      artist
      username
      comments {
        _id
      }
    }
  }
`;