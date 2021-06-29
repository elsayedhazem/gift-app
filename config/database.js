const mongoose = require("mongoose");

require("dotenv").config();

const uri = process.env.DB_STRING;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const conn = mongoose.connection;

conn.once("open", () => console.log("Connected to Database"));
conn.on("error", () => console.log("Error Connecting to Database"));

module.exports = mongoose;
