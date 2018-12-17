const express = require('express');
const router = express.Router();
const bookModel = require('../models/book.model');

router.get("/",(req,res) =>{

  res.send("<h2>This is Books Page! </h2>");
});

router.post("/",(req,res) =>{

  

});


module.exports = router;