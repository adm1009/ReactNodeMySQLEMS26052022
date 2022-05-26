const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const bday = require("../models/birthday")
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

exports.getbirthday = app.get("/birthdays", (req, res) => {
    bday.query("SELECT * FROM employees", (err, result) => {
      res.send(result);
    });
  });