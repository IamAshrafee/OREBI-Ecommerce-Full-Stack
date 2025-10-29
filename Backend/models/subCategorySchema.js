const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: [
    {
      type: Schema.Types.ObjectId,
      res: "categoryList",
      required: true,
    },
  ],
});

module.exports = mongoose.model("subCategoryList", subCategorySchema);
