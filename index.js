const express = require("express");
const mongoose = require("mongoose");
const app = express();
const connection = require("./common/connection");
const router =require('./routes/datroute')
const dat = require("./models/dat");
require("dotenv").config();
//const port = 8000;
app.use(express.json());

connection();
app.use(router);
 const PORT = process.env.port ||8000;

app.listen(PORT, () => {
  console.log(`server running on the port:${PORT}`);
});
