const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const live = require("../models/leave")
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


exports.leavedetailsapplypost=app.post("/leavedetailsapply", (req, res) => {
    const username = req.body.username;
    const approver = req.body.approver;
    const date = req.body.date;
    const checkin = req.body.checkin;
    const checkout = req.body.checkout;
    const reason = req.body.reason;
  
    live.query(
      "INSERT INTO applyforregulaization (username,approver,date,checkin,checkout,reason) VALUES (?,?,?,?,?,?)",
      [username, approver, date, checkin, checkout, reason],
      (err, result) => {
        console.log(err);
      }
    );
  });
  
  exports.leavedetailsapplyget=app.get("/leavedetailsgetapply", (req, res) => {
    live.query("SELECT * FROM applyforregulaization", (err, result) => {
      res.send(result);
    });
  });
  
  exports.leavedetailsapplygetalready=app.get("/leavedetailsalreadyapplied", (req, res) => {
    live.query("SELECT * FROM applyforregulaization", (err, result) => {
      res.send(result);
    });
  });
  exports.leavedetailsapplydelete=app.delete("/leavedetailsdeleteapply/:id", (req, res) => {
    const id = req.params.id;
    live.query(
      "DELETE FROM applyforregulaization WHERE id=?",
      id,
      (err, result) => {
        if (err) {
          console.log(error);
        } else {
          res.send(result);
        }
      }
    );
  });