const express = require("express");
const router = express.Router();
const pool = require("../db")


router.post("/login",async (req,res) => {
    try {
        const {user_email,user_password} = req.body;
        const user = await pool.query("Select * from users WHERE user_email = $1 AND user_password = $2",[user_email,user_password]);
        if (user.rows.length === 0) {
            return res.status(401).json("Password or email is invalid");
        }
    
        res.json({message:"successfully logined"})
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
   
})

router.post("/register", async (req,res) => {
    try {
        const {user_name,user_phone_no,user_email,user_password} = req.body;

        const newUser = await pool.query("INSERT INTO users (user_name,user_phone_no,user_email,user_password) VALUES($1,$2,$3,$4)",[user_name,user_phone_no,user_email,user_password]);
        res.status(200).json({message:"succees"});
        console.log(newUser);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message:"failes"})
        
    }
   
})




module.exports = router
