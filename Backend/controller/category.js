const categorySchema = require("../models/categorySchema");
const mongoose = require("mongoose");

async function categoriesController(req, res) {
  try {
    const categories = await categorySchema.find();
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function categoryController(req, res) {
  try {
    const { id } = req.params;

    // Validate ID parameter
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Category ID is required",
      });
    }

    // Check if ID is a valid MongoDB ID (if using MongoDB)
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid category ID format",
      });
    }

    // Find category by ID
    const categoryFound = await categorySchema.findById(id);

    // Check if category exists
    if (!categoryFound) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    // Return success response with category data
    return res.status(200).json({
      success: true,
      message: "Category retrieved successfully",
      data: categoryFound,
    });
  } catch (error) {
    console.error("Error in categoryController:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}

async function updateCategoryController(req, res) {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({
        success: false,
        message: `any field can't be blank`,
      });
    }

    const previousCategory = await categorySchema.findById(id);

    if (!previousCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }
    const updateCategory = await categorySchema.findByIdAndUpdate(
      id,
      {
        $set: { name, description },
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      success: true,
      message: `${previousCategory.name} is successfully updated to ${name}`,
      data: updateCategory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Category update failed",
      error: error.message,
    });
  }
}

async function deleteCategoryController(req, res) {
  try {
    const { id } = req.params;

    const checkingCategory = await categorySchema.findById(id);

    if (!checkingCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    const categoryDelete = await categorySchema.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: `${categoryDelete.name} category deleted successfully`,
      data: categoryDelete,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Category delete failed",
      error: error.message,
    });
  }
}

async function createCategoryController(req, res) {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Category name is required",
        error: "Category name field can't be blank",
      });
    }

    const existingCategory = await categorySchema.findOne({ name });

    if (existingCategory) {
      return res.status(400).json({
        success: false,
        message: "Category already exits",
        error: `This ${name} category is already exist in the database`,
      });
    }

    const category = new categorySchema({
      name,
      description,
    });

    await category.save();

    res.status(201).json({
      success: true,
      message: "Category successfully created",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "category creation failed",
      error: error.message,
    });
  }
}

module.exports = {
  categoriesController,
  createCategoryController,
  categoryController,
  updateCategoryController,
  deleteCategoryController,
};