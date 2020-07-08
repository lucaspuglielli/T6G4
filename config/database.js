require("dotenv").config();

module.exports = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
  };