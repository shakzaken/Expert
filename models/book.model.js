const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({

  name:{
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 255
  },
  description:{
    type: String,
    required: true,
    minlength: 5,
    maxlength: 512
  },
  imageUrl: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 512,
  },
  date: {
    type: Date,
    default: Date.now()
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true
  }
});

module.exports = mongoose.model("Book",bookSchema);