const router=require("express").Router();
const Pin = require("../models/Pin");

router.post("/",async(req,res)=>{
    const newPin=new Pin(req.body);
    console.log(req.body);
    console.log(newPin);
    try{
        const savedPin=await newPin.save();
        res.status(200).json(savedPin);
    }
    catch{
        res.status(500).json(err);
    }
});

module.exports=router;