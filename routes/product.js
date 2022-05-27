var express = require('express');
var router = express.Router();
var {create,getAll,getById,updateById,deleteById}  = require('../models/product');
var {getAllCategory} = require('../models/category');
/* GET home page. */
router.get('/',  async function (req, res, next) {

    return res.render('product', { title: 'Product',data:await getAll(),category:await getAllCategory() });

});
router.post('/',async (req,res)=>{
    const{name, price,quantity, unit, category, description, image} = req.body;
    if(name && price && quantity && unit && category && description && image){
        const data = await  create(name, price,quantity, unit, category, description, image);
        return res.json({
            status: "success",
            message: "Create category success",
            data:data
        });
    }
    return res.json({
        status: "success",
        message: "Create category success",
    });
});
router.get('/all',async (req,res)=>{
    const data = await getAll();
    return res.json({
        status: "success",
        data: data
    });
});
router.get('/:id',async (req,res)=>{
    const data = await getById(req.params.id);
    return res.json({
        status: "success",
        data: data
    });
});
router.put('/:id',async (req,res)=>{
    const{name, price,quantity, unit, category, description, image} = req.body;
    const data = await updateById(req.params.id,name, price,quantity, unit, category, description, image);
    return res.json({
        status: "success",
        data: data
    });
});
router.delete('/:id',async (req,res)=>{
    const data = await deleteById(req.params.id);
    return res.json({
        status: "success",
        data: data
    });});
module.exports = router;
