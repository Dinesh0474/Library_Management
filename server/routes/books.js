const express = require("express");
const router = express.Router();
const pool = require("../db")


router.post("/create",async (req,res) => {
    try {
        const {title,author,subject,publish} = req.body;
        const newbook = await pool.query("INSERT INTO books(title,author,subject,publish) VALUES ($1,$2,$3,$4)",[title,author,subject,publish]);
        res.status(200).json({message:"book created"})
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message:"failes"})
        
    }

})

router.get("/display", async (req, res) => {
    try {
        const allBooks = await pool.query("SELECT * FROM books");
        res.status(200).json(allBooks.rows); 
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Failed to fetch books" });
    }
});


module.exports = router;