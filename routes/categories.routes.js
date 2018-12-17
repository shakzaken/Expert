const express = require('express');
const router = express.Router();
const CategoryModel = require('../models/category.model');
const HTTP_STATUS = require('../constants/http_status');

router.get("/",(req,res) =>{

  res.send("<h2>This is Categories Page! </h2>");
});

router.post("/",async (req,res) =>{
  try{
    const category = new CategoryModel(req.body);
    await category.save();
    res.send("Category created Successfuly");
  }catch(err){
    res.status(HTTP_STATUS.BAD_REQUEST).send(err);
  }
});

router.delete("/:id",async (req,res) =>{

  try{
    const id = req.params.id;
    const category = await CategoryModel.findByIdAndDelete(id);
    console.log(category);
    res.send(category);
  } catch(err){
    console.log(err);
    res.status(HTTP_STATUS.BAD_REQUEST).send(err);
  }
});


module.exports = router;