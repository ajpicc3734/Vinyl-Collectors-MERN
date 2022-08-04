const { Schema, model } = require("mongoose");
const commentSchema = require("./Comment");

const recordSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    comments: [commentSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Record = model("Record", recordSchema);

module.exports = Record;
