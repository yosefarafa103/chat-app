const { Schema, model } = require("mongoose");
const { validate } = require("./UserModel");

const chatSchema = new Schema({
  members: {
    type: [Schema.ObjectId],
    ref: "User",
    required: [true, "At least two member is required."],
    validate: {
      validator: (value) => {
        console.log(
          new Set(value.map((el) => el.toString())).size,
          value.map((el) => el.toString())
        );
        return (
          value.length >= 2 &&
          new Set(value.map((el) => el.toString())).size ===
            value.map((el) => el.toString()).length
        );
      },
      message: "Chat must have at least two members.",
    },
  },
});

const chatModel = new model("Chat", chatSchema);

module.exports = chatModel;
