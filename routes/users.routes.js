const express = require('express');
const router = express.Router();
const UserModel = require('../models/user.model');

router.get("/",(req,res) =>{

  res.send("<h2>This is Users Page! </h2>");
});

router.post("/",(req,res) =>{
  const user = new UserModel(req.body);
  user.save()
      .then(result =>{
        res.send("User saved successfuly");
      })
      .catch(err => console.log(err));
    
});


module.exports = router;