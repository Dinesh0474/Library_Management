const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;


app.use(express.json());
app.use(cors());

app.use("/user",require("./routes/users"))

app.use("/books",require("./routes/books"))

app.use("/admin",require("./routes/admin"))






app.listen(PORT,(req,res) => {
    console.log(`Server started on running on ${PORT}`);
})