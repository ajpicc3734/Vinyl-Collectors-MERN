const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema(
  {
    commentText: {
      type: String,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);


module.exports = commentSchema;