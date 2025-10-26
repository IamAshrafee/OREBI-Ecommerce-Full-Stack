const express = require("express");
const {
  categoryController,
  createCategoryController,
} = require("../../controller/category");
const router = express.Router();

router.get("/category", categoryController);
router.post("/create-category", createCategoryController);

module.exports = router;
