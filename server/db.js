// const { Pool } = require("pg");
// const url = require("url");

// // Parse the database URL
// const params = url.parse("postgresql://postgres:2CeGcB3-a**2g4-5*CB4bEE3GFfec6b1@viaduct.proxy.rlwy.net:34322/railway");
// const auth = params.auth.split(":");

// const pool = new Pool({
//     user: auth[0], // Username
//     password: auth[1], // Password
//     host: params.hostname, // Hostname
//     port: params.port, // Port
//     database: params.pathname.split("/")[1], // Database name
//     ssl: true, // Enable SSL
// });

// module.exports = pool;





const { Pool } = require('pg');

// Connection string from the provided link
const connectionString = "postgresql://postgres:2CeGcB3-a**2g4-5*CB4bEE3GFfec6b1@viaduct.proxy.rlwy.net:34322/railway";

// Parse the connection string
const { user, password, host, port, database } = require('pg-connection-string').parse(connectionString);

// Create a new Pool
const pool = new Pool({
  user,
  password,
  host,
  port,
  database,
});


module.exports = pool;
