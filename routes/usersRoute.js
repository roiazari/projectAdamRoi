const express= require("express");
const router = express.Router();
const bcrypt=require("bcrypt");
const {authToken} =require("../auth/authToken");
const {UsersModel,validateUsers, validateLogin, genToken} =require("../models/usersModel");

router.get("/", async(req,res) => {
  let data= await UsersModel.find({});
  res.json(data);
});

router.get("/userInfo",authToken,async(req,res)=>{
  let user= await UsersModel.findOne({_id:req.tokenData._id},{password:0});
    res.json(user);
});

router.post("/", async(req,res)=>{
  let validBody= validateUsers(req.body);
  if(validBody.error){
    return res.status(400).json(validBody.error.details);
  }
  try{
  let users = new UsersModel(req.body);
  users.password=await bcrypt.hash(users.password,10);
  await users.save();
  users.password="*****";
  res.json(users);
  }
  catch(err){
    console.log(err);
    res.status(400).json({err:"Email already in system or there another problem"})
  }
});

router.delete("/:idDel" , async(req,res)=>{
  try{
    let data =await UsersModel.deleteOne({_id:req.params.idDel});
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(400).send(err);
  }

});
router.put("/:idEdit" , async(req,res)=>{
  let validBody= validateUsers(req.body);
  if(validBody.error){
    return res.status(400).json(validBody.error.details);
  };
  try{
    let data =await UsersModel.updateOne({_id:req.params.idEdit},req.body);
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(400).send(err);
  }

});

router.post("/login", async(req,res)=>{
  let validBody= validateLogin(req.body);
  if(validBody.error){
    return res.status(400).json(validBody.error.details);
  }
  let user = await UsersModel.findOne({email:req.body.email});
  if(!user)return res.status(401).json({msg:"user not found"});
  let passwordValid =await bcrypt.compare(req.body.password,user.password);
  if(!passwordValid)return res.status(401).json({msg:"password wrong"});
  let newToken=genToken(user._id);
  res.json({token:newToken});

} );

module.exports = router;