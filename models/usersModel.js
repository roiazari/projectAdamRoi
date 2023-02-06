const mongoose = require("mongoose");
const Joi = require("joi");

let usersSchema = new mongoose.Schema({
user_id:String,
name:String,
email:String,
phone:Number,
password:String,
date_created:{
type:Date , default:Date.now
},
disease_id:Array,
hospital_id:Array,
role:String,
})
exports.UsersModel = mongoose.model("users",usersSchema)

exports.validateJoi = (_reqBody) => {
let joiSchema = Joi.object({
name:Joi.string().min(2).max(50).required(),
email:Joi.string().min(10).max(50).email().required(),
phone:Joi.number().min(9).max(50).required(),
password:Joi.string().min(6).max(20).required(),
disease_id:Joi.array().min(1).max(5).required(),
hospital_id:Joi.array().min(1).max(50).required(),
role:Joi.string().min(1).max(10).required(),
})
return joiSchema.validate(_reqBody)
}