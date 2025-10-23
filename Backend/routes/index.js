const express = require('express');
const apiRoute = require('./api/index')
const router = express.Router();

router.use(process.env.BASE_URL, apiRoute)

module.exports = router;