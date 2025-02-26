require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const userRoutes = require("./routes/user.routes");
const messagesRoutes = require("./routes/messages.routes");
const chatsRoutes = require("./routes/chats.routes");
const mongoose = require("mongoose");
const {
  handelValidationErrors,
  handelUnauthentecatedErrors,
} = require("./utils/helper");
const cookieParser = require("cookie-parser");
// DB connection
const DB = process.env.MONGO_URI.replace(
  "<db_password>",
  process.env.DB_PASSWORD
);
app.use(cookieParser());
app.use(express.json());
mongoose.connect(DB).then(() => console.log("Connected to MongoDB"));
app.use("/api/users", userRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/chats", chatsRoutes);
// global error handler
app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    return handelValidationErrors(err, res);
  }
  if (err.name === "JsonWebTokenError") {
    return handelUnauthentecatedErrors(res);
  }
  res.status(500).json({
    status: "error",
    message: err,
  });
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
