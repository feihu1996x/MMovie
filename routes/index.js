var express = require('express');
var router = express.Router();
var ejs = require('ejs');
var config = require('../config');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(config.url_prefix);
    res.render('index', {url_prefix: config.url_prefix});
});

module.exports = router;

