const mongoose = require("mongoose");
const Joi = require("joi");

let couponSchema = new mongoose.Schema({
user_id:String,
title:String,
img_url:String,
info:String,
address:String,
category_id:Number,
lat:Number,
lon: Number,
up_to_date:{
type:Date , default:Date.now
},
date_created:{
type:Date , default:Date.now
},
link_url:String,
})
exports.CouponsModel = mongoose.model("couponss",couponSchema)

exports.validateJoi = (_reqBody) => {
let joiSchema = Joi.object({
title:Joi.string().min(2).max(100).required(),
img_url:Joi.string().min(2).max(200).required(),
info:Joi.string().min(2).max(3000).required(),
address:Joi.string().min(2).max(50).required(),
category_id:Joi.number().min(2).max(10).required(),
lat:Joi.number().min(2).max(10).required(),
lon:Joi.number().min(2).max(10).required(),
up_to_date:Joi.date().min(2).max(20).required(),
link_url:Joi.string().min(2).max(100).required(),
})
return joiSchema.validate(_reqBody)
}