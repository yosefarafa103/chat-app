const express = require("express");
const {
  createMessage,
  deleteMessage,
  getAllMessage,
} = require("../controllers/messages.controller");
const router = express.Router();

router.route("/").post(createMessage).get(getAllMessage);
router.route("/:messageId").delete(deleteMessage);
module.exports = router;
