const mongoose = require("mongoose");
const Joi = require("joi");
const jwt =require("jsonwebtoken");
let usersSchema = new mongoose.Schema({
     userID:String,
name:String,
email:String,
phone:String,
password:String,
role:{
    type: String,
    default:"regular"
},
date_created:{
type:Date , default:Date.now
},
disease_id:Array,
hospital_id:Array
})
exports.UsersModel = mongoose.model("users",usersSchema)

exports.validateUsers = (_reqBody) => {
let joiSchema = Joi.object({
userID:Joi.string().min(2).max(100).required(),
name:Joi.string().min(2).max(50).required(),
email:Joi.string().min(10).max(50).email().required().email(),
phone:Joi.string().min(9).max(50).required(),
password:Joi.string().min(6).max(20).required()
// disease_id:Joi.array().min(1).max(5).required(),
// hospital_id:Joi.array().min(1).max(50).required(),
})
return joiSchema.validate(_reqBody)
}

exports.genToken=(_userId)=>{
    let token= jwt.sign({_id:_userId},"BIGSECRET",{expiresIn:"60mins"});
    return token;

}

exports.validateLogin = (_reqBody) => {
    let joiSchema = Joi.object({
    email:Joi.string().min(10).max(50).email().required().email(),
    password:Joi.string().min(6).max(20).required()
    })
    return joiSchema.validate(_reqBody)
    };


    

