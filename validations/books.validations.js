const Joi = require("joi");

const bookSchema = Joi.object().keys({
  name: Joi.string().min(3).max(255).required(),
  description: Joi.string().min(5).max(512).required(),
  imageUrl: Joi.string().min(5).max(512).required(),
  categoryId : Joi.string().min(5).max(255).required()
});

module.exports =  bookSchema;