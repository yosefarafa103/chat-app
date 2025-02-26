const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/UserModel");
module.exports = async (req, res, next) => {
  const decodeUser = jwt.verify(
    req.cookies.loggin_token,
    process.env.JWT_SECRET
  );
  const otp = req.cookies.otp;
  if (!otp || !req.body.otp) return next("No OTP code found");
  const isCorrectOtp = await bcrypt.compare(req.body.otp, otp);
  // console.log(isCorrectOtp);
  if (!isCorrectOtp) return next("Incorrect OTP code");
  res.clearCookie("otp");
  console.log(req.cookies);

  // await User.findByIdAndUpdate(user._id, { otp: undefined }, { new: true });
  res.send("OTP sent to your registered email");
};
