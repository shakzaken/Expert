const express = require('express');
const router = express.Router();
const Joi = require("joi");
const UserModel = require('../models/user.model');
const asyncMiddleware = require("../middlewares/async.middleware");
const {loginSchema} = require("../validations/users.validations");
const {BAD_REQUEST} = require("../constants/http_status");
const responses = require("../responses/users.responses");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const {privateKey} = require("../config/config");
const _ = require('lodash');



router.post("/login", async (req,res)=> {
  try{
    const loginUser = req.body;
    await Joi.validate(loginUser,loginSchema);
    const userFromServer = await UserModel.findOne({email:loginUser.email});
    if(!userFromServer){
      throw new Error("Invalid Email");
    }
    const passwordsMatch = bcrypt.compareSync(loginUser.password,userFromServer.password);
    if(!passwordsMatch){
      throw new Error("Passwords don't match");
    }

    const token = jwt.sign({
      email: userFromServer.email
    },privateKey,{expiresIn: "24h"});

    res.send({
      user: _.omit(userFromServer.toObject(),["password"]),
      token: token
    });
  } 
  catch(err){
    console.log(err);
    res.status(BAD_REQUEST).send({
      message: "Email or Password are invalid"
    });
  }

});


router.post("/validate",(req,res,next)=> {

  try{
    const token =  req.headers.authorization;
    if(!token){
      throw new Error("Invalid token");
    }
    const decoded =  jwt.verify(token,privateKey);
    res.send(decoded);
  }
  catch(err){
    console.log(err);
    res.status(401).send("Unauthorized");
  }
 
});


module.exports = router;