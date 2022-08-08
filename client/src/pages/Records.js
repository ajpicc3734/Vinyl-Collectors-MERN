<<<<<<< HEAD
import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_RECORD } from '../utils/queries';

const Records = (props) => {
    const { id: recordId } = useParams();


    const { loading, data } = useQuery(QUERY_RECORD, {
        variables: { id: recordId }
    });

    const record = data?.addRecord || {};

=======
import React from "react";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_RECORD } from "../utils/queries";

const Records = (props) => {
  const { id: recordId } = useParams();

  const { loading, data } = useQuery(QUERY_RECORD, {
    variables: { id: recordId },
  });

  const record = data?.addRecord || {};
>>>>>>> 38e01a272a78fdfd67af81a90772e2b8667dd08e

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-medium">
            {record.username}
          </span>{" "}
          added {record.title}
        </p>
        <div className="card-body">
          {/* <img>api call for cloudinary</img> */}
        </div>
      </div>
    </div>
  );
};

export default Records;
