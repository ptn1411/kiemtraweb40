var express = require("express");
var router = express.Router();
const {
    createCategory,
    getCategory,
    updateCategory,
    deteleCategory
    ,
    getAllCategory,
    getCategoryById
} = require("../models/category");

router.get("/", async (req, res) => {
    const list = await getCategory();
    return res.render("category", {title: "Category", data: list});
});

router.post("/", async (req, res) => {
    const name = req.body.name;
    await createCategory(name);
    return res.json({
        status: "success",
        message: "Create category success"
    });
});
router.get('/all', async (req, res) => {
    const list = await getAllCategory();
    return res.json({
        status: "success",
        data: list
    });
});
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const data = await getCategoryById(id);
    return res.json({
        status: "success",
        data: data
    });
});
router.put("/:id", async (req, res) => {
    const data = await updateCategory(req.body.name, req.params.id);
    console.log(data);
    return res.json({
        status: "success",
        message: "Update category success"
    });});

router.delete("/:id", async (req, res) => {
    await deteleCategory(req.params.id);
    return res.json({
        status: 'success',
    });
});
module.exports = router;
