import React from 'react';
import { Link } from 'react-router-dom';

const RecordList = ({ records, title }) => {
  if (!records.length) {
    return <h3>No records Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {records &&
        records.map(record => (
          <div key={record._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${record.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {record.username}
              </Link>{' '}
              Posted on {record.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/record/${record._id}`}>
                {/* <p>{record.postText}</p>
                <p className="mb-0">
                  Likes: {post.reactionCount} || {' '}
                  {post.reactionCount ? 'see' : 'Join'}  the discussion!
                </p> */}
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RecordList;