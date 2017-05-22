var express = require('express');
var router = express.Router();

const Mac = require('../models/Mac');
const macController = require('../controllers/macController');


router.get('/', macController.getMacs);
router.post('/', macController.getNewmacs);
router.get('/macs/:id/edit', macController.getEditmacs);
router.post('/macs/:id/edit', macController.postEditmacs);
router.get('/macs/:id/delete', macController.getDeletemacs);


router.get('/macs/api', macController.getMacsApi);
router.post('/macs/api', macController.getNewmacsApi);
router.get('/macs/api/:id', macController.getEditmacsApi);
router.delete('/macs/api/:id', macController.getDeletemacsApi);



module.exports = router;
