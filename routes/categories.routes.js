const express = require('express');
const router = express.Router();
const CategoryModel = require('../models/category.model');
const {BAD_REQUEST} = require('../constants/http_status');
const categoryValidationSchema = require('../validations/categories.validations');
const responses = require("../responses/categories.responses");
const Joi = require('joi');
const asyncMiddleware = require("../middlewares/async.middleware");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/",asyncMiddleware(async (req,res) =>{

    const categories = await CategoryModel.find({});
    res.send(categories);  
}));

router.use("/",authMiddleware);

router.post("/",asyncMiddleware(async (req,res) =>{

    await Joi.validate(req.body,categoryValidationSchema);
    const checkForCategory = await CategoryModel.findOne({name : req.body.name});
    if(checkForCategory) 
        return res.status(BAD_REQUEST).send(responses.nameAlreadyExists);              
    const category = new CategoryModel(req.body);
    await category.save();
    res.send(category);
}));

router.delete("/:id",asyncMiddleware(async (req,res) =>{
  const id = req.params.id;
  const category = await CategoryModel.findByIdAndDelete(id);
  res.send(category);
  
}));

router.delete("/",asyncMiddleware(async (req,res) =>{

  const category = await CategoryModel.findOneAndDelete({
    name: req.body.name
  });
  if(!category){
    throw new Error("Category not found");
  } 
  res.send(category);
  
}));

module.exports = router;