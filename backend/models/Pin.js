const mongoose=require("mongoose");

const PinSchema=new mongoose.Schema({
    username:{
        type:String,
        required,
        min:3,
        max:20,
    },
    title:{
        type:String,
        required,
    },
    desc:{
        type:String,
        required,
        min:5,
    },
    rating:{
        min:0,
        max:5,
        type:Number,
        required,
    },
    lat:{
        type:Number,
        required,
    },
    long:{
        type:Number,
        required,
    },

},{timestamps:true});

module.exports=mongoose.model("Pin",PinSchema);