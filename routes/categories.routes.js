const express = require('express');
const router = express.Router();
const CategoryModel = require('../models/category.model');
const {BAD_REQUEST,INTERNAL_SERVER_ERROR} = require('../constants/http_status');
const categoryValidationSchema = require('../validations/categories.validations');
const responses = require("./responses/categories.responses");
const Joi = require('joi');

router.get("/",async (req,res) =>{

  try{
    const categories = await CategoryModel.find({});
    res.send(categories);
  }catch(err){
    console.log(err);
    res.status(INTERNAL_SERVER_ERROR).send(responses.internalServerError);
  }
  
});

router.post("/",async (req,res) =>{
  try{
    await Joi.validate(req.body,categoryValidationSchema);
    const checkForCategory = await CategoryModel.findOne({name : req.body.name});
    if(checkForCategory) 
        return res.status(BAD_REQUEST).send(responses.nameAlreadyExists);              
    const category = new CategoryModel(req.body);
    await category.save();
    res.send(category);
  }catch(err){
    console.log(err);
    res.status(INTERNAL_SERVER_ERROR).send(responses.internalServerError); 
  }
});

router.delete("/:id",async (req,res) =>{

  try{
    const id = req.params.id;
    const category = await CategoryModel.findByIdAndDelete(id);
    res.send(category);
  } catch(err){
    console.log(err);
    res.status(INTERNAL_SERVER_ERROR).send(responses.internalServerError);
  }
});

router.delete("/",async (req,res) =>{

  try{
    const category = await CategoryModel.findOneAndDelete({
      name: req.body.name
    });
    if(!category){
      throw new Error("Category not found");
    } 
    res.send(category);
  } catch(err){
    console.log(err);
    res.status(INTERNAL_SERVER_ERROR).send(responses.internalServerError);
  }
});

module.exports = router;