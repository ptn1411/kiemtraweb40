var express = require('express');
var router = express.Router();
var {create,getAll,getById,updateById,deleteById}  = require('../models/product');
/* GET home page. */
router.get('/',  async function (req, res, next) {
    return res.render('product', { title: 'Product',data:{} });
});
router.post('/',async (req,res)=>{
    const{name, price, unit, category, description, image} = req.body;
    const data = await  create({name, price, unit, category, description, image});
    return res.json(data);
});
router.get('/all',async (req,res)=>{
    const data = await getAll();
    return res.json(data);
});
router.get('/:id',async (req,res)=>{
    const data = await getById(req.params.id);
    return res.json(data);
});
router.put('/:id',async (req,res)=>{
    const{name, price, unit, category, description, image} = req.body;
    const data = await updateById(req.params.id,name, price, unit, category, description, image);
    return res.json(data);
});
router.delete('/:id',async (req,res)=>{
    const data = await deleteById(req.params.id);
    return res.json(data);
});
module.exports = router;
