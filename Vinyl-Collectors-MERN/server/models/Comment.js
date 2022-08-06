const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    commentText: {
      type: String,
      minlength: 1,
    },
    createdAt: {
      type: Date,
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

const Comment = model("Comment", commentSchema);

module.exports = Comment;
