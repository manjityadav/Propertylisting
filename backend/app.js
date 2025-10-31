const dotenv = require("dotenv");
dotenv.config();
const express=require('express');
const app=express();
const cors=require('cors');
const mongoose =require('mongoose');
const Property=require('./modules/property.js');

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://manjeetyadav2905_db_user:8hcDu3knQqgBJK8z@propertylisting.skbt26r.mongodb.net/?appName=propertyListing");
console.log("db created")



app.post("/api/properties",async(req,res)=>{
    console.log(req.body);
    let data=  new Property({
        propertyName:req.body.propertyName,
        type:req.body.type,
        price:req.body.price,
        location:req.body.location,
        imageurl:req.body.imageurl,
        description:req.body.description
    });
    await data.save();
    console.log("data was saved");
    
});


app.get("/api/properties",async(req,res)=>{
    let data=await Property.find({});
    res.send(data);
});

app.listen(8000,()=>{
    console.log(("app is listening"));
    
})
