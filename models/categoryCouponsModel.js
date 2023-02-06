const mongoose = require("mongoose");
const Joi = require("joi");

let schema = new mongoose.Schema({
city:String,
category:String,
})
exports.Category_couponsModel = mongoose.model("category_couponss",schema)

exports.validateJoi = (_reqBody) => {
let joiSchema = Joi.object({
city:Joi.string().min(2).max(20).required(),
category:Joi.string().min(20).max(2).required(),
})
return joiSchema.validate(_reqBody)
}