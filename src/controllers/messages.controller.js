const MessageModel = require("../models/MessageModel");

exports.createMessage = async (req, res, next) => {
  try {
    const { text, chatId } = req.body;
    const newMessage = await MessageModel.create({ text, chatId });
    res.status(201).json(newMessage);
  } catch (err) {
    console.log(err);
    return next(err);
  }
};
exports.deleteMessage = async (req, res, next) => {
  try {
    const { messageId } = req.params;
    const deletedMessage = await MessageModel.findByIdAndDelete(messageId);
    if (!deletedMessage) {
      return res.status(404).json({ message: "Message not found" });
    }
    res.status(200).json({
      status: "Message deleted successfully",
    });
  } catch (err) {
    console.log(err);
    return next(err);
    // res.status(400).json({ err });
  }
};
exports.getChatMessage = async (req, res, next) => {
  try {
    const { chatId } = req.params;
    const messages = await MessageModel.find({ chatId });
    res.status(200).json(messages);
  } catch (err) {
    return next(err);
  }
};
exports.getAllMessage = async (req, res, next) => {
  try {
    const messages = await MessageModel.find();
    res.status(200).json(messages);
  } catch (err) {
    return next(err);
  }
};
