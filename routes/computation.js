var express = require('express');
var router = express.Router();

/* GET my data page. */
router.get('/', function(req, res, next) {
    const x = search_params.get("value");
    res.send('abs applied to: ' + x + " is " + Math.abs(x));
});

// router.get('/', function(req, res, next) {
//     res.render('mid');
// })

module.exports = router;