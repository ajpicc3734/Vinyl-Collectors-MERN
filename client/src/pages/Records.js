<<<<<<< HEAD
// import React from 'react';
// import {  useParams } from 'react-router-dom';

// import { useQuery } from '@apollo/client';
// import { QUERY_RECORD } from '../utils/queries';

=======
import React from "react";
import { useParams } from "react-router-dom";
>>>>>>> 76662a8bd81a0aba121253eb90dc7a477ed3a49c

import { useQuery } from "@apollo/client";
import { QUERY_RECORD } from "../utils/queries";

<<<<<<< HEAD
// const Records = (props) => {
//     const { id: recordId } = useParams();
    

//     const { loading, data} =useQuery(QUERY_RECORD, {
//         variables: { id: recordId }
//     });

//     const record = data?.addRecord || {};
    

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (<div>
//         <div className="card mb-3">
//             <p className="card-header">
//                 <span style={{ fontWeight: 700 }} className="text-medium">
//                     {record.username}
//                 </span>{' '}
//                 added {record.title}
//             </p>
//             <div className="card-body">
//                 {/* <img>api call for cloudinary</img> */}
//             </div>
//         </div>
//     </div>
//     );
// };

// export default Records.js;
=======
const Records = (props) => {
  const { id: recordId } = useParams();

  const { loading, data } = useQuery(QUERY_RECORD, {
    variables: { id: recordId },
  });

  const record = data?.addRecord || {};

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
>>>>>>> 76662a8bd81a0aba121253eb90dc7a477ed3a49c
