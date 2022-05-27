var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',  async function (req, res, next) {
 return res.render('index', { title: 'Home',data:{} });
});

module.exports = router;
