var express = require('express');
var router = express.Router();

const Mac = require('../models/Mac');
const macController = require('../controllers/macController');


router.get('/', macController.getMacs);
router.post('/', macController.getNewmacs);
router.get('/macs/:id/edit', macController.getEditmacs);
router.post('/macs/:id/edit', macController.postEditmacs);
router.get('/macs/:id/delete', macController.getDeletemacs);


router.get('/api/macs', macController.getMacsApi);
router.post('/api/macs', macController.getNewmacsApi);
router.get('/api/macs/:id', macController.getEditmacsApi);
router.delete('/api/macs/:id', macController.getDeletemacsApi);



module.exports = router;
