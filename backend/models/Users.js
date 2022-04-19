const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required,
        unique:true,
        min:3,
        max:20,
    },
    email:{
        unique:true,
        type:String,
        required,
        min:5,
        max:20,
    },
    password:{
        required,
        type:String,
        min:8,

    },
},{timestamps:true}//create and update data
);

module.exports=mongoose.model("Users",UserSchema);