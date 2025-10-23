const express = require('express');
const authRouter = require("./auth")
const router = express.Router();

router.use('/authentication', authRouter)

module.exports = router;