const express = require("express");
const axios = require("axios");

const UserModel = require("../model/Usermodel");

const UserRoute = express.Router();

UserRoute.post("/post",(req,res)=>{
    axios.get("https://randomuser.me/api/?results=50")
    .then((r)=>r.data.results)
    .then(async(r)=>{
    const data = await UserModel.insertMany(r);
    res.send("data added");
})
})

UserRoute.delete("/delete",async(req,res)=>{
    const data = await UserModel.deleteMany();
    res.send("data deleted")
})

UserRoute.get("/get",async(req,res)=>{
    const gender = req.query.gender;
    const {page,limit} = req.query;
    if(!gender)
    {
    const data = await UserModel.find().skip(page).limit(limit);
    res.send(data);
    }
    else
    {
        const fildata = await UserModel.find({gender}).skip(page).limit(limit);
        res.send(fildata);
    }
})

module.exports = UserRoute;