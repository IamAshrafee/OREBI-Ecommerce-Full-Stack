const colorSchema = require("../models/colorSchema");
const mongoose = require("mongoose");

async function colorsController(req, res) {
  try {
    const colors = await colorSchema.find();
    res.status(200).json(colors);
  } catch (error) {
    console.error("Error fetching colors:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function colorController(req, res) {
  try {
    const { id } = req.params;

    // Validate ID parameter
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Color ID is required",
      });
    }

    // Check if ID is a valid MongoDB ID (if using MongoDB)
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid color ID format",
      });
    }

    // Find color by ID
    const colorFound = await colorSchema.findById(id);

    // Check if color exists
    if (!colorFound) {
      return res.status(404).json({
        success: false,
        message: "Color not found",
      });
    }

    // Return success response with color data
    return res.status(200).json({
      success: true,
      message: "Color retrieved successfully",
      data: colorFound,
    });
  } catch (error) {
    console.error("Error in colorController:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}

async function updateColorController(req, res) {
  try {
    const { id } = req.params;
    const { name, colorCode } = req.body;

    if (!name || !colorCode) {
      return res.status(400).json({
        success: false,
        message: `any field can't be blank`,
      });
    }

    const previousColor = await colorSchema.findById(id);

    if (!previousColor) {
      return res.status(404).json({
        success: false,
        message: "Color not found",
      });
    }
    const updateColor = await colorSchema.findByIdAndUpdate(
      id,
      {
        $set: { name, colorCode },
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      success: true,
      message: `${previousColor.name} is successfully updated to ${name}`,
      data: updateColor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Color update failed",
      error: error.message,
    });
  }
}

async function deleteColorController(req, res) {
  try {
    const { id } = req.params;

    const checkingColor = await colorSchema.findById(id);

    if (!checkingColor) {
      return res.status(404).json({
        success: false,
        message: "Color not found",
      });
    }

    const colorDelete = await colorSchema.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: `${colorDelete.name} color deleted successfully`,
      data: colorDelete,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Color delete failed",
      error: error.message,
    });
  }
}

async function createColorController(req, res) {
  try {
    const { name, colorCode } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Color name is required",
        error: "Color name field can't be blank",
      });
    }

    const existingColor = await colorSchema.findOne({ name });

    if (existingColor) {
      return res.status(400).json({
        success: false,
        message: "Color already exits",
        error: `This ${name} color is already exist in the database`,
      });
    }

    const color = new colorSchema({
      name,
      colorCode,
    });

    await color.save();

    res.status(201).json({
      success: true,
      message: "Color successfully created",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "color creation failed",
      error: error.message,
    });
  }
}

module.exports = {
  colorsController,
  createColorController,
  colorController,
  updateColorController,
  deleteColorController,
};