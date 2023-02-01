const mongoose = require("mongoose");
const Joi = require("joi");

let postsSchema = new mongoose.Schema({
user_id:Number,
date_created:String,
title:String,
info:String,
disease_id:Number,
})
exports.PostsModel = mongoose.model("postss",postsSchema)

exports.validateJoi = (_reqBody) => {
let joiSchema = Joi.object({
title:Joi.string().min(2).max(999).required(),
info:Joi.string().min(2).max(999).required(),
disease_id:Joi.number().min(2).max(999).required(),
})
return joiSchema.validate(_reqBody)
}