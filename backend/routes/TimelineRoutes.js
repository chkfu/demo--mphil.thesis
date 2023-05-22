const express = require('express');
const TimelineController = require('./../controllers/TimelineController');


const router = express.Router();

router.route('/').get(TimelineController.getAllTimeline);

module.exports = router;