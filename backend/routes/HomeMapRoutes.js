const express = require('express');
const HomeMapController = require('./../controllers/HomeMapController');


const router = express.Router();

router.route('/').get(HomeMapController.getHomeMap_AllData);
router.route('/late-qing-period').get(HomeMapController.getHomeMap_LateQingPeriod);
router.route('/pre-war-period').get(HomeMapController.getHomeMap_PrewarPeriod);
router.route('/wartime-period').get(HomeMapController.getHomeMap_WartimePeriod);
router.route('/stat-layer').get(HomeMapController.getStatisticMap_StatLayer);

module.exports = router;