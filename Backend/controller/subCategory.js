function subCategoriesController(req, res) {}

function subCategoryController(req, res) {}

function createSubCategoryController(req, res) {
  const { name, description, category } = req.body;
  if (!name || !description || !category) {
    res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  
}

function updateSubCategoryController(req, res) {}

function deleteSubCategoryController(req, res) {}

module.exports = {
  subCategoriesController,
  subCategoryController,
  updateSubCategoryController,
  createSubCategoryController,
  deleteSubCategoryController,
};
