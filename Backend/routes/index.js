const express = require('express');
const apiRoute = require('./api/index')
const router = express.Router();

router.use('/api/v1', apiRoute)

module.exports = router;