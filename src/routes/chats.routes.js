const express = require("express");
const {
  createChat,
  getChat,
  getUserChat,
} = require("../controllers/chat.controller");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
router.use(isLoggedIn);
router.route("/").post(createChat).get(getChat);

router.route("/get-user-chats").get(getUserChat);
module.exports = router;
