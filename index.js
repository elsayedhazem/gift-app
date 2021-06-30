const express = require("express");

require("./config/database");

const app = express();

app.use(express.json());

app.listen(8000);
