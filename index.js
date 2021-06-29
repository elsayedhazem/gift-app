const express = require("express");
const mongoose = require("./config/database");

const app = express();

app.use(express.json());

app.listen(8000);
