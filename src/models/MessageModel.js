const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
  text: {
    type: String,
    required: [true, "Message text is required."],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  sender: {
    type: Schema.ObjectId,
    ref: "User",
  },
  chatId: {
    type: Schema.ObjectId,
    required: [true, "Chat ID is required."],
  },
});

const MessagesModel = new model("Message", messageSchema);
module.exports = MessagesModel;
