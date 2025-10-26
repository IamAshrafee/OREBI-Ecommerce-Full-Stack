const express = require("express");
const {
  categoriesController,
  createCategoryController,
  categoryController,
  updateCategoryController,
  deleteCategoryController,
} = require("../../controller/category");
const router = express.Router();

router.get("/categories", categoriesController);
router.post("/create-category", createCategoryController);
router.get("/category/:id", categoryController);
router.patch("/update-category/:id", updateCategoryController);
router.delete("/delete-category/:id", deleteCategoryController);

module.exports = router;
