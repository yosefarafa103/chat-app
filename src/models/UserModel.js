const mongoose = require("mongoose");
const validatorPkg = require("validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Name Is Required"],
    validate: {
      validator: (value) => validatorPkg.matches(value, /\w+\s\w+/gi),
      message: "Name Must Only Contain Alphabets And Spaces",
    },
  },
  password: {
    type: String,
    required: [true, "Password Is Required"],
    minlength: [8, "Password Must Be At Least 8 Characters"],
  },

  confirmPassword: {
    type: String,
    required: [true, "Confirm Password Is Required"],
    minlength: [8, "Confirm Password Must Be At Least 8 Characters"],
    maxlength: [20, "Confirm Password Must Not Exceed 20 Characters"],
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: "Passwords Must Match",
    },
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  email: {
    type: String,
    validate: {
      validator: function (email) {
        return validatorPkg.isEmail(email);
      },
      message: "Not Valid Email!",
    },
  },
  question: {
    type: [String],
    // required: [true, "Question Is Required"],
    validate: {
      validator: (value) => {
        console.log(value);

        return value.length === 2;
      },
      message: "Must Be (answer) and (question) only 2 items",
    },
  },
  otp: String,
});
UserSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = undefined;
  }
  next();
});

module.exports = mongoose.model("User", UserSchema);
