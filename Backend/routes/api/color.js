const express = require("express");
const {
  colorsController,
  createColorController,
  colorController,
  updateColorController,
  deleteColorController,
} = require("../../controller/color");
const router = express.Router();

router.get("/colors", colorsController);
router.post("/create-color", createColorController);
router.get("/color/:id", colorController);
router.patch("/update-color/:id", updateColorController);
router.delete("/delete-color/:id", deleteColorController);

module.exports = router;
