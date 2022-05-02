const router=require('express').Router();
const User=require('../models/Users');
const bcrypt = require('bcrypt');

router.post("/register",async(req,res)=>
{
    //generate unique password
    try{
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(req.body.password,salt);

    //create new user
    const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password:hashedPassword,
        });
        console.log(newUser);
    //save user and password
        const user=await newUser.save();
        res.status(200).json(user._id);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});
   
router.post("/login",async(req,res)=>
{
    try{
        const user=await User.findOne({//finding only that  user which login
            username:req.body.username
        });
        !user && res.status(400).json("Wrong username or password");//comapre password with that password which we sent
        console.log(user);
    
        //validate
        const validatepassword=await bcrypt.compare
        (
            req.body.password,user.password
        );
        !validatepassword && res.status(400).json("Wrong password");
    
        //send res
        res.status(200).json({_id:user._id,username:user.username});
    
        }
        catch(err)
        {
            res.status(500).json(err);
        }
});

    


    

    // router.get("/",async(req,res)=>
    // {
    //     try{const users=await User.find();
    //     res.status(200).json(users);}
    //     catch(err)
    //     {
    //         res.status(500).json(err);
    //     }
        
    // 

    module.exports=router;


    