const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next("Required fields are missing");
  }
  console.log(req.body);
  const user = await User.findOne({ email });
  if (!user) return next("User with this email is not found");
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return next("Invalid Email Or Password");
  const token = jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.cookie("loggin_token", token, { expiresIn: "1h" });
  res.status(200).json({
    status: "success login",
    token,
  });
};
