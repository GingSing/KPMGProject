require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const db = process.env.MONGO_URI;

const PORT = process.env.PORT;

mongoose
  .connect(`${db}`, { useNewUrlParser: true })
  .then(() => console.log("Connected to Database"))
  .catch(err => console.log(err));

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
