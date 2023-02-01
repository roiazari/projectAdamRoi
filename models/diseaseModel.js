const mongoose = require("mongoose");
const Joi = require("joi");

let diseaseSchema = new mongoose.Schema({
name:String,
info:String,
})
exports.DiseasesModel = mongoose.model("diseasess",diseaseSchema)

exports.validateJoi = (_reqBody) => {
let joiSchema = Joi.object({
name:Joi.string().min(2).max(999).required(),
info:Joi.string().min(2).max(3000).required(),
})
return joiSchema.validate(_reqBody)
}