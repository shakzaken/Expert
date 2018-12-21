const Joi = require("joi");

const categorySchema = Joi.object().keys({
  name: Joi.string().min(3).max(255).required()
});

module.exports =  categorySchema;

