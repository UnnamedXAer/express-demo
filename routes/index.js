var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: ' I will try to host my express app on firebase.' });
});

module.exports = router;
