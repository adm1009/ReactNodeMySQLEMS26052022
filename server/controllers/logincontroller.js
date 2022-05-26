const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const log = require("../models/login");
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


exports.registerpost=app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const question = req.body.question;
    const answer = req.body.answer;
    log.query(
      "INSERT INTO users (username,password,question,answer) VALUES (?,?,?,?)",
      [username, password, question, answer],
      (err, result) => {
        console.log(err);
      }
    );
  });
  
  exports.loginpost=app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    log.query(
      "SELECT * FROM users WHERE username=? AND password=?",
      [username, password],
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }
        if (result.length > 0) {
          res.send(result);
        } else {
          res.send({ message: "Please enter correct username and password" });
        }
      }
    );
  });
  exports.newpassloginpost=app.post("/newpasslogin", (req, res) => {
    const username = req.body.username;
    const question = req.body.question;
    const answer = req.body.answer;
    log.query(
      "SELECT * FROM users WHERE username=? AND question=? AND answer=? ",
      [username, question, answer],
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }
        if (result.length > 0) {
          res.send(result);
        } else {
          res.send({ message: "Wrong choice of Question&Answer" });
        }
      }
    );
  });
  exports.newpasswordput=app.put("/newpassword", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    log.query(
      "UPDATE users SET password=? WHERE username=?",
      [password, username],
      (err, result) => {
        if (err) {
          console.log(err);
        }
      }
    );
  });
  exports.newpassput=app.put("/newpass", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    log.query(
      "UPDATE users SET password=? WHERE username=?",
      [password, username],
      (err, result) => {
        if (err) {
          console.log(err);
        }
      }
    );
  });