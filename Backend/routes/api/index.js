const express = require("express");
const authRouter = require("./auth");
const usersRouter = require("./users");
const categoryRouter = require("./category");
const colorRouter = require("./color");
const router = express.Router();

router.use("/authentication", authRouter);
router.use("/users", usersRouter);
router.use("/products", categoryRouter);
router.use("/products", colorRouter);

module.exports = router;
