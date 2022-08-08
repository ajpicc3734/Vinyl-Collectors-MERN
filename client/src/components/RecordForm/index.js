import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_RECORD } from '../../utils/mutations';
import { QUERY_RECORDS, QUERY_ME } from '../../utils/queries';

// const RecordForm = () => {
//     // const [title, artist, setText] = useState('');
//     // const [artist, setText] = useState('');
//     const [recordstate, setFormState] = useState({
//         title: '',
//         artist: '',
//         // password: '',
//       });
//     const [characterCount, setCharacterCount] = useState(0);

//     const [addRecord, { error }] = useMutation(ADD_RECORD, {
//         update(cache, { data: { addRecord } }) {

//             // could potentially not exist yet, so wrap in a try/catch
//             try {
//                 // update me array's cache
//                 const { me } = cache.readQuery({ query: QUERY_ME });
//                 cache.writeQuery({
//                     query: QUERY_ME,
//                     data: { me: { ...me, records: [...me.records, addRecord] } },
//                 });
//             } catch (e) {
//                 console.warn("First record insertion by user!")
//             }

//             // update record array's cache
//             const { records } = cache.readQuery({ query: QUERY_RECORDS });
//             cache.writeQuery({
//                 query: QUERY_RECORDS,
//                 data: { records: [addRecord, ...records] },
//             });
//         }
//     })

//     // update state based on form input changes
//     // const handleChange = (event) => {
//     //     if (event.target.value.length <= 280) {
//     //         setText(event.target.value);
//     //         setCharacterCount(event.target.value.length);
//     //     }
//     // };
//     const handleChange = (event) => {
//         const { name, value } = event.target;
    
//         setFormState({
//           ...recordstate,
//           [name]: value,
//         });
//       };
    

//     // submit form
//     const handleFormSubmit = async (event) => {
//         event.preventDefault();

//         try {
//             await addRecord({
//                 variables: { ...recordstate }
//             });

//             // clear form value
//         //     setText('');
//             setCharacterCount(0);
//         } catch (e) {
//             console.error(e);
//         }
//     };

//     return (
//         <div>
//             <p
//                 className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
//             >
//                 Character Count: {characterCount}/280
//                 {error && <span className="ml-2">Something went wrong...</span>}
//             </p>
//             <form
//                 className="flex-row justify-center justify-space-between-md align-stretch"
//                 onSubmit={handleFormSubmit}
//             >
//                  {/* <textarea
//           placeholder="Here's record..."
//           value={title}
//           className="form-input col-12 col-md-9"
//           onChange={handleChange}
//         ></textarea> 
//          <textarea
//         placeholder="Here's record..."
//         value={artist}
//         className="form-input col-12 col-md-9"
//         onChange={handleChange}
//       ></textarea> */}
// <input
//                 className="form-input"
//                 placeholder="Title"
//                 name="title"
//                 type="title"
//                 id="title"
//                 value={recordstate.title}
//                 onChange={handleChange}
//               />
//               <input
//                 className="form-input"
//                 placeholder="Artist"
//                 name="artist"
//                 type="artist"
//                 id="artist"
//                 value={recordstate.artist}
//                 onChange={handleChange}
//               />

//                 <button className="btn col-12 col-md-3" type="submit">
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default RecordForm;


const RecordForm = () => {
    const [title, setText] = useState('');

    const [characterCount, setCharacterCount] = useState(0);

    const [addRecord, { error }] = useMutation(ADD_RECORD, {
        update(cache, { data: { addRecord } }) {

            // could potentially not exist yet, so wrap in a try/catch
            try {
                // update me array's cache
                const { me } = cache.readQuery({ query: QUERY_ME });
                cache.writeQuery({
                    query: QUERY_ME,
                    data: { me: { ...me, records: [...me.records, addRecord] } },
                });
            } catch (e) {
                console.warn("First record insertion by user!")
            }

            // update record array's cache
            const { records } = cache.readQuery({ query: QUERY_RECORDS });
            cache.writeQuery({
                query: QUERY_RECORDS,
                data: { records: [addRecord, ...records] },
            });
        }
    });

    // update state based on form input changes
    const handleChange = (event) => {
        if (event.target.value.length <= 280) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addRecord({
                variables: { title},
            });

            // clear form value
            setText('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <p
                className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
            >
                Character Count: {characterCount}/280
                {error && <span className="ml-2">Something went wrong...</span>}
            </p>
            <form
                className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}
            >
                <textarea
                    placeholder="Create a new record..."
                    value={title}
                    className="form-input col-12 col-md-9"
                    onChange={handleChange}
                ></textarea>
                 {/* <textarea
                    placeholder="add artist..."
                    value={artist}
                    className="form-input col-12 col-md-9"
                    onChange={handleChange}
                ></textarea> */}
                <button className="btn col-12 col-md-3" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default RecordForm; 