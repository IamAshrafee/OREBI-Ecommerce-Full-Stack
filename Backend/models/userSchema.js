const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  telephone: {
    type: String,
  },
  //   Address section
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
  },
  division: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("UserList", userSchema);
