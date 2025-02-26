const express = require("express");
const {
  createUser,
  getAllUser,
  deleteAllUser,
} = require("../controllers/user.controller");
const forgetPassword = require("../auth/forgetPassword");
const recoverPassword = require("../auth/recoverPassword");
const { login } = require("../auth/login");
const logout = require("../auth/logout");
const isLoggedIn = require("../middlewares/isLoggedIn");
const router = express.Router();
router.post("/login", login);
router.get("/logout", logout);
router.use(isLoggedIn);
router.route("/").post(createUser).get(getAllUser).delete(deleteAllUser);
router.post("/recover-password", recoverPassword);
router.get("/forget-password", forgetPassword);
module.exports = router;
