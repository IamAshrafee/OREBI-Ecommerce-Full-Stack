const express = require("express");
const {
  subCategoriesController,
  createSubCategoryController,
  subCategoryController,
  updateSubCategoryController,
  deleteSubCategoryController,
} = require("../../controller/subCategory");
const router = express.Router();

router.get("/subCategories", subCategoriesController);
router.post("/create-subCategory", createSubCategoryController);
router.get("/subCategory/:id", subCategoryController);
router.patch("/update-subCategory/:id", updateSubCategoryController);
router.delete("/delete-subCategory/:id", deleteSubCategoryController);

module.exports = router;
