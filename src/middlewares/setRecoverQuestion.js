const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
module.exports = async (req, res, next) => {
  const question = req.body.question;
  const decodeUser = jwt.verify(
    req.cookies.loggin_token,
    process.env.JWT_SECRET
  );
  console.log(question);

//   if (!decodeUser.question) {
//     if (!question) return next("Question is required");
//     const u = await User.findByIdAndUpdate(
//       decodeUser._id,
//       { question },
//       { new: true }
//     );
//     await u.save();
//     return res.status(200).json({ message: "Question Created Successfully" });
//   }
  //   next();
  res.status(200).json({ message: "Loggin successfully!" });
};
