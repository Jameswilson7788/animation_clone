const router = require('express').Router();
const List = require('../models/list');
const animationController = require('../controller/animation');

router.get('/animation', animationController.list);

router.get('/animation/play/:name?/:no?', animationController.play);
router.post('/animation/upload/list', animationController.uploadList);
router.get('/animation/upload/list', animationController.showUploadList);
router.get('/animation/update/:name?', animationController.showUpdate);
router.post('/animation/update/:name?', animationController.update);

module.exports = router;