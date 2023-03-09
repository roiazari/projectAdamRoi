const express= require("express");
const router = express.Router();
const {AdvisorsModel ,validateAdvisors} =require("../models/advisorsModel");

router.get("/", async(req,res) => {
  let data= await AdvisorsModel.find({});
  res.json(data);
});

router.post("/", async(req,res)=>{
  let validBody= validateAdvisors(req.body);
  if(validBody.error){
    return res.status(400).json(validBody.error.details);
  }
  let advisors = new AdvisorsModel(req.body);
  await advisors.save();
  res.json(advisors);
});

router.delete("/:idDel" , async(req,res)=>{
  try{
    let data =await AdvisorsModel.deleteOne({_id:req.params.idDel});
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(400).send(err);
  }

});
router.put("/:idEdit" , async(req,res)=>{
  let validBody= validateAdvisors(req.body);
  if(validBody.error){
    return res.status(400).json(validBody.error.details);
  };
  try{
    let data =await AdvisorsModel.updateOne({_id:req.params.idEdit},req.body);
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(400).send(err);
  }

});

module.exports = router;