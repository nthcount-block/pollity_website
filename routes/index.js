const path = require('path');

const express = require('express');

const pages = require('../controllers/pages');

const router = express.Router();

router.get('/', pages.getIndex);


module.exports = router;