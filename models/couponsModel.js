const mongoose = require("mongoose");
const Joi = require("joi");

let couponSchema = new mongoose.Schema({
user_id:Number,
title:String,
img_url:String,
info:String,
address:String,
Latlong:Number,
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
title:Joi.string().min(2).max(999).required(),
img_url:Joi.string().min(2).max(999).required(),
info:Joi.string().min(2).max(3000).required(),
address:Joi.string().min(2).max(999).required(),
Latlong:Joi.number().min(2).max(999).required(),
up_to_date:Joi.date().min(2).max(999).required(),
link_url:Joi.string().min(2).max(999).required(),
})
return joiSchema.validate(_reqBody)
}