const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  colorCode: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("colorList", colorSchema);
