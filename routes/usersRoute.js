const express= require("express");
const router = express.Router();

router.get("/", async(req,res) => {
  res.json({msg:"users work"});
})


module.exports = router;