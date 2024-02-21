// app.js or index.js

const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

const createTablesRoute = require("./routes/createTables");

app.use(express.json());
app.use(cors());

// Define routes
app.use("/createTables", createTablesRoute);

app.use("/user", require("./routes/users"));
app.use("/books", require("./routes/books"));
app.use("/admin", require("./routes/admin"));

app.listen(PORT, () => {
  console.log(`Server started on running on ${PORT}`);
});
