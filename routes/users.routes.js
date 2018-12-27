const express = require('express');
const router = express.Router();
const Joi = require("joi");
const UserModel = require('../models/user.model');
const asyncMiddleware = require("../middlewares/async.middleware");
const {createUserSchema,updateUserSchema} = require("../validations/users.validations");
const {BAD_REQUEST} = require("../constants/http_status");
const responses = require("../responses/users.responses");
const bcrypt = require('bcryptjs');
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/",asyncMiddleware(async (req,res) =>{
    const users = await UserModel.find({});
    res.send(users);
}));

router.post("/",asyncMiddleware(async (req,res) => {
  await Joi.validate(req.body,createUserSchema);
  const testUser = await UserModel.findOne({email: req.body.email});
  const userFromClient = req.body;
  
  const salt = bcrypt.genSaltSync(10);
  userFromClient.password = bcrypt.hashSync(userFromClient.password,salt);

  if(testUser) {
    return res.status(BAD_REQUEST).send(responses.emailAlreadyExists);
  }
  const newUser = await new UserModel(userFromClient).save();
  res.send(newUser);
}));

router.use("/",authMiddleware);

router.put("/:id",asyncMiddleware(async (req,res) =>{

  await Joi.validate(req.body,updateUserSchema);
  const userByEmail = await UserModel.findOne({email: req.body.email});
  const userById = await UserModel.findById(req.params.id);
  if(!userById){
    throw new Error("Invalid User ID");
  }
  if(userByEmail && userByEmail.id !== userById.id){
    return res.status(BAD_REQUEST).send(responses.emailAlreadyExists);
  }
  await userById.set(req.body).save();
  res.send(userById);

}));

router.delete("/:id",asyncMiddleware(async (req,res) =>{
  const user =  await UserModel.findByIdAndDelete(req.params.id);
  if(!user){
    throw new Error("Invalid ID");
  }
  res.send(user);
}));

router.delete("/",asyncMiddleware(async (req,res) =>{
  const user = await UserModel.findOneAndDelete({email: req.body.email});
  if(!user){
    throw new Error("Invalid email");
  }
  res.send(user);
}));


module.exports = router;