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

router.post("/borrow/:id", async (req, res) => {
    try {
        const id = req.params.id;

     
        const response = await pool.query("SELECT stocks FROM books WHERE book_id = $1", [id]);

        const stockvalue = response.rows[0].stocks; 
        const fstock = stockvalue - 1;

    
        const resp = await pool.query("UPDATE books SET stocks = $1 WHERE book_id = $2", [fstock, id]);

        res.status(200).json({ message: "Stock value updated" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Error updating stock value" });
    }
})


router.post("/borrowdetails", async (req,res) => {
    try {

        const {book_id,user_name,user_email,user_phone_no,get_date,return_date} = req.body;


        const response = await pool.query("INSERT INTO booksborrow (book_id,user_name,user_email,user_phone_no,get_date,return_date) VALUES($1,$2,$3,$4,$5,$6)",[book_id,user_name,user_email,user_phone_no,get_date,return_date])

        res.status(200).json({message: "borrowdetails inserted"})
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message:"borrordetails not inserted"})
    }
})



module.exports = router
