var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    value = value + 1;
    res.send('users access are: ' + value);
});

var value = 10;
module.exports = router;