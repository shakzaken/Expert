const express = require('express');
const router = express.Router();
const CategoryModel = require('../models/category.model');
const {BAD_REQUEST,INTERNAL_SERVER_ERROR} = require('../constants/http_status');
const categoryValidationSchema = require('../validations/categories.validations');
const responses = require("./responses/categories.responses");
const Joi = require('joi');

router.get("/",async (req,res) =>{

  try{
    const categories = await Category.find({});
    res.send(categories);
  }catch(err){
    res.status(INTERNAL_SERVER_ERROR).send(responses.internalServerError);
  }
  
});

router.post("/",async (req,res) =>{
  try{
    await Joi.validate(req.body,categoryValidationSchema);
    const checkForCategory = await CategoryModel.find({name : req.body.name});
    if(checkForCategory.length > 0) 
        return res.status(BAD_REQUEST).send(responses.nameAlreadyExists);              
    const category = new CategoryModel(req.body);
    await category.save();
    res.send("Category created Successfuly");
  }catch(err){
    console.log(err);
    res.status(INTERNAL_SERVER_ERROR).send(responses.internalServerError);
      
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
    res.status(INTERNAL_SERVER_ERROR).send(responses.internalServerError);
  }
});


module.exports = router;