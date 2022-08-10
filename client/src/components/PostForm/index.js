import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";

const PostForm = () => {
  const [artist, setArtist] = useState("");
  const [postText, setText] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      // could potentially not exist yet, so wrap in a try/catch
      try {
        // update me array's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, posts: [...me.posts, addPost] } },
        });
      } catch (e) {
        console.warn("First post insertion by user!");
      }

      // update post array's cache
      const { posts } = cache.readQuery({ query: QUERY_POSTS });
      cache.writeQuery({
        query: QUERY_POSTS,
        data: { posts: [addPost, ...posts] },
      });
    },
  });

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleChangeArt = (event) => {
    if (event.target.value.length <= 280) {
      setArtist(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleChangeReview = (event) => {
    if (event.target.value.length <= 280) {
      setReview(event.target.value);
      
    }
  };
  const handleChangeRating = (event) => {
    setRating(event.target.value);
  };

  //   const handleChange = (event) => {
  //     const { data } = [artist, postText]
  //     data[event.target.value] = event.target.value;
  //     this.setArtist({
  //       data,
  //     });
  //   };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addPost({
        variables: { postText, artist, review, rating },
      });

      // clear form value
      setText("");
      setArtist("");
      setReview("");
      setRating("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <p
        className={`m-0 ${characterCount === 280 || error ? "text-error" : ""}`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Record Title"
          value={postText}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <textarea
          placeholder="Musical Artist"
          value={artist}
          className="form-input col-12 col-md-9"
          onChange={handleChangeArt}
        ></textarea>
        <textarea
          placeholder="Write Your Review"
          value={review}
          className="form-input col-12 col-md-9"
          onChange={handleChangeReview}
        ></textarea>

        <fieldset>
          <legend>Rating</legend>

          <input
            type="radio"
            name="rating"
            id="rating-1"
            value="1"
            onChange={handleChangeRating}
            checked={rating === "1"}
          />
          <label htmlFor="rating-1">1</label>

          <input
            type="radio"
            name="rating"
            id="rating-2"
            value="2"
            onChange={handleChangeRating}
            checked={rating === "2"}
          />
          <label htmlFor="rating-2">2</label>

          <input
            type="radio"
            name="rating"
            id="rating-3"
            value="3"
            onChange={handleChangeRating}
            checked={rating === "3"}
          />
          <label htmlFor="rating-3">3</label>

          <input
            type="radio"
            name="rating"
            id="rating-4"
            value="4"
            onChange={handleChangeRating}
            checked={rating === "4"}
          />
          <label htmlFor="rating-4">4</label>

          <input
            type="radio"
            name="rating"
            id="rating-5"
            value="5"
            onChange={handleChangeRating}
            checked={rating === "5"}
          />
          <label htmlFor="rating-5">5</label>
        </fieldset>

        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;
