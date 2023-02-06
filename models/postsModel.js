const mongoose = require("mongoose");
const Joi = require("joi");

let postsSchema = new mongoose.Schema({
user_id:String,
date_created:String,
title:String,
info:String,
disease_id:Number,
})
exports.PostsModel = mongoose.model("postss",postsSchema)

exports.validateJoi = (_reqBody) => {
let joiSchema = Joi.object({
title:Joi.string().min(2).max(50).required(),
info:Joi.string().min(2).max(1500).required(),
disease_id:Joi.number().min(1).max(20).required(),
})
return joiSchema.validate(_reqBody)
}