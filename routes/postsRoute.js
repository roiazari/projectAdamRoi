const express= require("express");
const router = express.Router();
const {PostsModel ,validatePosts} =require("../models/postsModel");

router.get("/", async(req,res) => {
  let data= await PostsModel.find({});
  res.json(data);
});

router.post("/", async(req,res)=>{
  let validBody= validatePosts(req.body);
  if(validBody.error){
    return res.status(400).json(validBody.error.details);
  }
  let posts = new PostsModel(req.body);
  await posts.save();
  res.json(posts);
});
router.delete("/:idDel" , async(req,res)=>{
  try{
    let data =await PostsModel.deleteOne({_id:req.params.idDel});
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(400).send(err);
  }

});
router.put("/:idEdit" , async(req,res)=>{
  let validBody= validatePosts(req.body);
  if(validBody.error){
    return res.status(400).json(validBody.error.details);
  };
  try{
    let data =await PostsModel.updateOne({_id:req.params.idEdit},req.body);
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(400).send(err);
  }

});



module.exports = router;