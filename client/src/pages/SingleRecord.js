import React from 'react';
import { useParams } from 'react-router-dom';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_RECORD } from '../utils/queries';

const SingleRecord = (props) => {
  const { id: recordId } = useParams();

  const { loading, data } = useQuery(QUERY_RECORD, {
    variables: { id: recordId },
  });

  const record = data?.record || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {record.username}
          </span>{' '}
          record on {record.createdAt}
        </p>
        <div className="card-body">
          <p>{record.title}</p>
          <p>{record.artist}</p>
        </div>
      </div>

      {record.commentCount > 0 && (
        <CommentList reactions={record.comments} />
      )}

      {Auth.loggedIn() && <CommentForm recordId={record._id} />}
    </div>
  );
};

export default SingleRecord;
