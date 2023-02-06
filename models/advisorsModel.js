const mongoose = require("mongoose");
const Joi = require("joi");

let advisorSchema = new mongoose.Schema({
userID:String,
name:String,
img_url:String,
info:String,
dateCreated:{
type:Date , default:Date.now
},
exprinced_year:Number,
location:String,
disease_ids :Array,
phone:String,
})
exports.AdvisorsModel = mongoose.model("advisorss",advisorSchema)

exports.validateAdvisors = (_reqBody) => {
let joiSchema = Joi.object({
userID:Joi.string().min(2).max(100).required(),
name:Joi.string().min(2).max(20).required(),
img_url:Joi.string().min(1).max(100).required(),
info:Joi.string().min(2).max(2500).required(),
dateCreated:Joi.date().min(2).max(20).required(),
exprinced_year:Joi.number().min(0).max(20).required(),
location:Joi.string().min(2).max(20).required(),
disease_ids :Joi.array().min(2).max(20).required(),
phone:Joi.string().min(2).max(20).required(),
})
return joiSchema.validate(_reqBody)
}