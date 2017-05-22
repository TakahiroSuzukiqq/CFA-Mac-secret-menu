var express = require('express');
var router = express.Router();

const Mac = require('../models/Mac');

/* GET home page. */
router.get('/', function(req, res, next) {
  mac.find()
    .then(macs => {
      res.render('index', {
        title: 'Macs',
        macs: macs
      })
    })
});
router.post('/', (req, res) => {
  const name = req.body.mac_name;
  let mac = new Mac();
  mac.name = name;
  mac.save()
   .then(() => {
     res.redirect('/')
   })
})

module.exports = router;
