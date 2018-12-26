const express = require('express');
const router = express.Router();
const Joi = require('joi');
const bookModel = require('../models/book.model');
const {BAD_REQUEST,INTERNAL_SERVER_ERROR} = require("../constants/http_status");
const responses = require("./responses/books.responses");
const booksValidationSchema = require("../validations/books.validations");

router.get("/",async (req,res) =>{

  try{
    const books = await bookModel.find({});
    res.send(books);
  }
  catch(err){
    console.log(err);
    res.status(INTERNAL_SERVER_ERROR).send(responses.internalServerError);
  }
});

router.post("/",async (req,res) =>{

  try{
    await Joi.validate(req.body,booksValidationSchema);
    const testBook = await bookModel.findOne({name: req.body.name});
    if(testBook){
      return res.status(BAD_REQUEST).send(responses.nameAlreadyExists);
    }
    const newBook = await new bookModel(req.body).save();
    res.send(newBook);
  }
  catch(err){
    console.log(err);
    res.status(INTERNAL_SERVER_ERROR).send(responses.internalServerError);
  }
  
});

router.put("/:id",async (req,res) =>{

  try{
    await Joi.validate(req.body,booksValidationSchema);
    const bookFromName = await bookModel.findOne({name: req.body.name});
    const bookFromId = await bookModel.findById(req.params.id);
    if(!bookFromId){
      throw new Error("Invalid Id");
    }
    if(bookFromName && bookFromName.id !== bookFromId.id){
      res.status(BAD_REQUEST).send(responses.nameAlreadyExists);
    }
    await bookFromId.set(req.body).save();
    res.send(bookFromId);
    
  }
  catch(err){
    console.log(err);
    res.status(INTERNAL_SERVER_ERROR).send(responses.internalServerError);
  }
});

router.delete("/",async (req,res) => {
  try{
    const book =  await bookModel.findOneAndDelete({
      name: req.body.name
    });
    if(!book){
      throw new Error("Book not found");
    }
    res.send(book);
  }
  catch(err){
    console.log(err);
    res.status(INTERNAL_SERVER_ERROR).send(responses.internalServerError);
  }
});

router.delete("/:id", async (req,res) =>{
  try{
    const book = await bookModel.findByIdAndDelete(req.params.id);
    res.send(book);
  }
  catch(err){
    console.log(err);
    res.status(INTERNAL_SERVER_ERROR).send(responses.internalServerError);
  }
});

module.exports = router;