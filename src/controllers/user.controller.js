const User = require("../models/UserModel");
exports.createUser = async (req, res, next) => {
  try {
    const { fullName, password, confirmPassword, email, question } = req.body;
    if (!fullName || !password || !confirmPassword || !email)
      return next("All fields are required");
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    return next(err);
  }
};
exports.getAllUser = async (req, res, next) => {
  try {
    const allUsers = await User.find();

    res.status(200).json({
      status: "success",
      data: allUsers,
    });
  } catch (err) {
    return next(err);
  }
};
exports.getAllUser = async (req, res, next) => {
  try {
    const allUsers = await User.find();
    res.status(200).json({
      status: "success",
      usersLength: allUsers.length,
      data: allUsers,
    });
  } catch (err) {
    return next(err);
  }
};

exports.deleteAllUser = async (req, res, next) => {
  try {
    await User.deleteMany();
    res.status(200).json({
      status: "success",
      message: "clear users sucessfully!",
    });
  } catch (err) {
    return next(err);
  }
};
