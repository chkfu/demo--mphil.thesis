const express = require('express');
const LiteratureController = require('./../controllers/LiteratureController');


const router = express.Router();

router.route('/').get(LiteratureController.getAllLiterature);

module.exports = router;