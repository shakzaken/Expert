const express = require('express');
const router = express.Router();
const Joi = require('joi');
const bookModel = require('../models/book.model');
const {BAD_REQUEST} = require("../constants/http_status");
const responses = require("../responses/books.responses");
const booksValidationSchema = require("../validations/books.validations");
const asyncMiddleware = require("../middlewares/async.middleware");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/",asyncMiddleware (async (req,res) =>{

  const books = await bookModel.find({});
  res.send(books);
}));


router.use("/",authMiddleware);

router.post("/",asyncMiddleware( async (req,res) =>{

    await Joi.validate(req.body,booksValidationSchema);
    const testBook = await bookModel.findOne({name: req.body.name});
    if(testBook){
      return res.status(BAD_REQUEST).send(responses.nameAlreadyExists);
    }
    const newBook = await new bookModel(req.body).save();
    res.send(newBook);
  
}));

router.put("/:id",asyncMiddleware (async (req,res) =>{

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
}));

router.delete("/",asyncMiddleware ( async (req,res) => {

    const book =  await bookModel.findOneAndDelete({
      name: req.body.name
    });
    if(!book){
      throw new Error("Book not found");
    }
    res.send(book); 
}));

router.delete("/:id", asyncMiddleware(async (req,res) =>{
    const book = await bookModel.findByIdAndDelete(req.params.id);
    res.send(book);
}));

module.exports = router;