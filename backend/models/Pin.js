const mongoose=require("mongoose");

const PinSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:3,
        max:20,
    },
    title:{
        type:String,
        require:true,
    },
    desc:{
        type:String,
        require:true,
        min:5,
    },
    rating:{
        min:0,
        max:5,
        type:Number,
        require:true,
    },
    lat:{
        type:Number,
        require:true,
    },
    long:{
        type:Number,
        require:true,
    },

},{timestamps:true});

module.exports=mongoose.model("Pin",PinSchema);