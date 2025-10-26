const categorySchema = require("../models/categorySchema");

async function categoryController(req, res) {
  try {
    const categories = await categorySchema.find();
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal server error" });
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
      message: "Registration failed",
      error: error.message,
    });
  }
}

module.exports = { categoryController, createCategoryController };
