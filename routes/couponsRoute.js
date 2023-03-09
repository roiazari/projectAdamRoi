const express= require("express");
const router = express.Router();
const {CouponsModel ,validateCoupons} =require("../models/couponsModel");

router.get("/", async(req,res) => {
  let data= await CouponsModel.find({});
  res.json(data);
});

router.post("/", async(req,res)=>{
  let validBody= validateCoupons(req.body);
  if(validBody.error){
    return res.status(400).json(validBody.error.details);
  }
  let coupons = new CouponsModel(req.body);
  await coupons.save();
  res.json(coupons);
});
router.delete("/:idDel" , async(req,res)=>{
  try{
    let data =await CouponsModel.deleteOne({_id:req.params.idDel});
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(400).send(err);
  }

});
router.put("/:idEdit" , async(req,res)=>{
  let validBody= validateCoupons(req.body);
  if(validBody.error){
    return res.status(400).json(validBody.error.details);
  };
  try{
    let data =await CouponsModel.updateOne({_id:req.params.idEdit},req.body);
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(400).send(err);
  }

});




module.exports = router;