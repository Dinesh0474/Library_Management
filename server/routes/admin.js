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

router.get("/borrowdisplay", async (req, res) => {
    try {
        const allBorrowBooks = await pool.query("SELECT * FROM booksborrow");
        res.status(200).json(allBorrowBooks.rows); 
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Failed to fetch books" });
    }
});

router.post("/userdetails/:email", async (req, res) => {
    try {
        const user_email = req.params.email; 
        const { book_id, borrow_date, return_date } = req.body; 
        
        const userDetails = await pool.query("SELECT user_name, user_id, user_phone_no FROM users WHERE user_email = $1", [user_email]);
        
        console.log(userDetails.rows[0].user_name);
        
        const borrowdetails = await pool.query("INSERT INTO booksborrow(book_id, user_name, user_id, user_phone_no, borrow_date, return_date) VALUES ($1, $2, $3, $4, $5, $6)", [book_id, userDetails.rows[0].user_name, userDetails.rows[0].user_id, userDetails.rows[0].user_phone_no, borrow_date, return_date]);
        
        res.status(200).json({message: "Borrow details inserted successfully"});
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Failed to fetch user details or insert borrow details" });
    }
});

router.get("/borrowdetails", async (req,res) => {
    try {

        const response = await pool.query("Select * from booksborrow");

        res.status(200).json(response.rows)
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message:"borrordetails not fetched"})
    }
})




module.exports = router