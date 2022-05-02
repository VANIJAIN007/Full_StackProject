const express=require('express');
const mongoose=require('mongoose');
const dotenv=require("dotenv");
const app=express();
const PinRoute=require('./routes/pins');
const UserRoute=require('./routes/users');

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})
.then(()=>{
    console.log("MongoDB Connected!");
})
.catch((err) => console.log(err));

app.use("/api/pins",PinRoute);
app.use("/api/users",UserRoute);

app.listen(8800,()=>{
    console.log("Backend server is running");
});

