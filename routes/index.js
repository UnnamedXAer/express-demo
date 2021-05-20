var express = require('express');
var router = express.Router();

const startDate = new Date();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		serverStartAt: startDate.toUTCString(),
		loadedAt: new Date().toUTCString()
	});
});

module.exports = router;
