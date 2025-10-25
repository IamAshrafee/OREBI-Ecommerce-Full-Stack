const express = require("express");
const registrationController = require("../../controller/registration");
const loginController = require("../../controller/login");
const router = express.Router();

router.post("/registration", registrationController);
router.post("/login", loginController);

module.exports = router;
