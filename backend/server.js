const express = require("express");
const axios = require("axios");
const UserRoute = require("./route/Userroute");
const cors = require("cors");
const connection = require("./config/db");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/",UserRoute);

app.listen(process.env.PORT || 8080,async()=>{
    await connection;
    console.log("server started")
})