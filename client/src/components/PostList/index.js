import React from "react";
import { Link } from "react-router-dom";


const PostList = ({ posts, title }) => {
  // if (!posts.length) {
  //   return <h3>No Posts Yet</h3>;
  // }

  return (
    <div>
      <h3>{title}</h3>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${post.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {post.username}
              </Link>{" "}
              Posted on {post.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/post/${post._id}`}>
                <p>Record Title: {post.postText}</p>
                <p>Musical Artist: {post.artist}</p>
                <p>Rating: {post.rating} </p>
                <p className="mb-0">
                  Comments: {post.reactionCount} ||{" "}
                  {/* {post.reactionCount ? "see" : "Join"} the discussion! */}
                  Click Here to Read Review
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
