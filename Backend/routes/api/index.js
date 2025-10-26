const express = require("express");
const authRouter = require("./auth");
const usersRouter = require("./users");
const categoryRouter = require("./category");
const router = express.Router();

router.use("/authentication", authRouter);
router.use("/users", usersRouter);
router.use("/products", categoryRouter);

module.exports = router;
