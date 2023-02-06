const express= require("express");
const router = express.Router();

router.get("/", async(req,res) => {
  res.json({msg:"category_coupons work"});
})


module.exports = router;