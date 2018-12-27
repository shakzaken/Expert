const Joi = require("joi");

const createUserSchema = Joi.object().keys({
  name: Joi.string().min(3).max(255).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(4).max(512).required(),
  
});
const updateUserSchema = Joi.object().keys({
  name: Joi.string().min(3).max(255).required(),
  email: Joi.string().email().required()
});

const loginSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(4).max(512).required(),
  
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  loginSchema
}