const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
module.exports = async (req, res, next) => {
  const otp = crypto.randomBytes(6).toString("hex").slice(0, 6);
  const hashed = await bcrypt.hash(otp, 13);
  res.cookie("otp", hashed, { expires: new Date(Date.now() + 3600000) });
  res.status(200).json({ message: "OTP sent successfully", otp });
};
