var express = require('express');
const url = require('url');
var router = express.Router();
const querystring = require('querystring');

let alert = require('alert');
/* GET my data page. */
router.get('/', function(req, res, next) {
    var a = req.query.value;
    res.send('abs applied to: ' + a + " is " + Math.abs(a));
});


module.exports = router;