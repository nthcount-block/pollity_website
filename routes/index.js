const path = require('path');

const express = require('express');

const pages = require('../controllers/pages');

const router = express.Router();

router.get('/', pages.getIndex);

router.get('/voters', pages.getVoter);

router.get('/admins', pages.getAdmin);

router.get('/privacypolicy', pages.getPrivacy);

router.get('/results', pages.getResults);



module.exports = router;