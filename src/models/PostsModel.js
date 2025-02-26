const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  postImages: {
    type: [String],
    default: null,
  },
  author: { type: Schema.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now() },
  lastUpdateAt: { type: Date, default: Date.now() },
  //   comments: [{ type: Schema.ObjectId, ref: "Comment" }],
});
