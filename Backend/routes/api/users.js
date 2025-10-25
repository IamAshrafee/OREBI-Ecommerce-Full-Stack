const express = require("express");
const usersController = require("../../controller/users");
const router = express.Router();

router.get("/all", usersController);

module.exports = router;