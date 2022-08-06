//To Do

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
//comment within record query

//Query ME

