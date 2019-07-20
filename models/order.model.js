const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const itemSchema = new Schema({
	bookId:{
		type: Schema.Types.ObjectId,
		required: true,
	},
	bookName:{
		type: String,
		required: true,
		minlength: 3,
		maxlength: 255
	},
	quantity:{
		type: Number,
		required:true,
		min:1,
		max:1000
	},
	imageUrl:{
		type: String,
		required: true,
		minlength:3,
		maxlength: 512
	}
});


const orderSchema = new Schema({

	items: [itemSchema],
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("Order",orderSchema);

