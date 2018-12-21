const Joi = require("joi");

const bookSchema = Joi.object().keys({
  name: Joi.string().min(3).max(255).required(),
  email: Joi.string().email(),
  password: Joi.string().min(4).max(512).required(),
  
});

module.exports =  bookSchema;