const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

  name:{
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true,
    minlength: 4,
    maxlength: 512,
  }
});

module.exports = mongoose.model("User",userSchema);