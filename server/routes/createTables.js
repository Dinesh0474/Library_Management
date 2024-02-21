// routes/createTables.js

const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/", async (req, res) => {
  try {
    // Execute SQL statements to create tables
    await pool.query(`
      CREATE TABLE users(
        user_id serial PRIMARY KEY,
        user_name VARCHAR(255) NOT NULL,
        user_phone_no VARCHAR(20),
        user_email VARCHAR(255) NOT NULL,
        user_password VARCHAR(255) NOT NULL
      );

      CREATE TABLE books(
        book_id serial PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(20) NOT NULL,
        subject VARCHAR(255),
        publish VARCHAR(255),
        stocks INT
      );

      CREATE TABLE booksborrow(
        borrow_id Serial primary key,
        book_id INT,
        user_name VARCHAR(255),
        user_id INT,
        user_phone_no VARCHAR(20),
        borrow_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        return_date TIMESTAMP
      );
    `);

    res.status(201).json({ message: "Tables created successfully" });
  } catch (error) {
    console.error("Error creating tables:", error);
    res.status(500).json({ error: "An error occurred while creating tables" });
  }
});

module.exports = router;
