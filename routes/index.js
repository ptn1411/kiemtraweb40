var express = require('express');
var router = express.Router();
var {getAll,getProductByCategory,getById}  = require('../models/product');
var {getCategoryById}  = require('../models/category');
/* GET home page. */
router.get('/',  async function (req, res, next) {
 return res.render('index', { title: 'Home',data:await getAll() });
});
router.get('/cart', async function (req, res, next) {
  return res.render('cart', { title: 'Cart' });
});
router.get('/p/:id', async function (req, res, next) {
 const data = await getById(req.params.id);
 const category = await getCategoryById(data.category);
category ? data.category = category[0].name : data.category = 'No category';
 return res.render('post', { title: 'Product',data:data });
});

router.get('/ctp/:id', async function (req, res, next) {
  return res.render('categorytoproduct', { title: 'Category To Product',data:await getProductByCategory(req.params.id) });
});

module.exports = router;
