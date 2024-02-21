const express = require("express");
const router = express.Router();
const pool = require("../db")




router.post("/login", async (req,res) =>{
    if(req.body.email === "admin@gmail.com" && req.body.password === "7777"){
        res.json("ok");
    }
    else{
        res.json("Inventory Team credentials incorrect")
    }
})


module.exports = router