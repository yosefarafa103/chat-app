const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const isValid = jwt.verify(req.cookies.loggin_token, process.env.JWT_SECRET);
  req.user = isValid.user;
  if (!isValid.exp > +(Date.now() / 1000).toFixed(0))
    return next("token expired! 401 Unauthorized");
  if (!req.cookies.loggin_token)
    next("please login first to access this page! 401 Unauthorized");
  next();
};
