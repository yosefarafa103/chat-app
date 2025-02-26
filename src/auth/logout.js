module.exports = async (req, res, next) => {
//   res.cookie("loggin_token", "");
  res.clearCookie("loggin_token");
  
  res.status(200).send("you'r logged out now");
};
