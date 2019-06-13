const express = require('express');
const router = express.Router();
const Joi = require('joi');
const orderModel = require("../models/order.model");
const {BAD_REQUEST} = require("../constants/http_status");
const responses = require("../responses/books.responses");
const booksValidationSchema = require("../validations/books.validations");
const asyncMiddleware = require("../middlewares/async.middleware");
const authMiddleware = require("../middlewares/auth.middleware");


router.get("/",asyncMiddleware (async (req,res) =>{
	const orders = await orderModel.find({});
	res.send(orders);
}));

//router.use("/",authMiddleware);

router.post("/",asyncMiddleware (async (req,res) =>{

	const order = await new orderModel(req.body).save();
	res.send(order);
	
}));


module.exports = router;

