const mongoose = require("mongoose");
const Joi = require("joi");

let usersSchema = new mongoose.Schema({
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
exports.UsersModel = mongoose.model("userss",usersSchema)

exports.validateJoi = (_reqBody) => {
let joiSchema = Joi.object({
name:Joi.string().min(2).max(999).required(),
email:Joi.string().min(2).max(999).email().required(),
phone:Joi.number().min(2).max(999).required(),
password:Joi.string().min(2).max(999).required(),
disease_id:Joi.array().min(2).max(999).required(),
hospital_id:Joi.array().min(2).max(999).required(),
role:Joi.string().min(2).max(999).required(),
})
return joiSchema.validate(_reqBody)
}