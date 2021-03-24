var express = require('express');
var router = express.Router();

/* GET my data page. */
router.get('/', function(req, res, next) {
    const x = request.params.value;
    res.send('abs applied to: ' + x + " is " + Math.abs(x));
});


module.exports = router;