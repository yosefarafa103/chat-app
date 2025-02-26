const Chat = require("../models/ChatsModel");

exports.createChat = async (req, res, next) => {
  try {
    const { members } = req.body;
    const chat = await Chat.create({ members });
    res.status(201).json(chat);
  } catch (err) {
    return next(err);
  }
};

exports.getChat = async (req, res, next) => {
  try {
    const chat = await Chat.findById(req.params.id);
    if (!chat) return res.status(404).json({ message: "Chat not found" });
    res.status(200).json(chat);
  } catch (err) {
    return next(err);
  }
};

exports.getUserChat = async (req, res, next) => {
  try {
    console.log(); // user
    const usersChat = await Chat.find({ members: { $in: [req.user._id] } });
    //   if (!chat) return res.status(404).json({ message: "Chat not found" });
    console.log(usersChat);

    res.status(200).json(chat);
  } catch (err) {
    return next(err);
  }

  res.send("...");
};
