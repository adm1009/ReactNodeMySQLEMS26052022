const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const prsonal = require("../models/personal")
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


exports.bankdetailspost=app.post("/personaldetailsbankdetails", (req, res) => {
    const username = req.body.username;
    const pancardno = req.body.pancardno;
    const accountno = req.body.accountno;
    const bankname = req.body.bankname;
  
    prsonal.query(
      "INSERT INTO bankdetails (username,pancardno,accountno,bankname) VALUES (?,?,?,?)",
      [username, pancardno, accountno, bankname],
      (err, result) => {
        console.log(err);
      }
    );
  });
  exports.bankdetailsget=app.get("/personaldetailsgetbankdetails", (req, res) => {
    prsonal.query("SELECT * FROM bankdetails", (err, result) => {
      res.send(result);
    });
  });
  exports.bankdetailsdelete=app.delete("/personaldetailsdeletebankdetails/:username", (req, res) => {
    const username = req.params.username;
    prsonal.query(
      "DELETE FROM bankdetails WHERE username=?",
      username,
      (err, result) => {
        if (err) {
          console.log(error);
        } else {
          res.send(result);
        }
      }
    );
  });
  exports.emergencycontactpost=app.post("/personaldetailsemergencycontact", (req, res) => {
    const username = req.body.username;
    const firstpersonname = req.body.firstpersonname;
    const firstpersonno = req.body.firstpersonno;
    const secondpersoname = req.body.secondpersoname;
    const secondpersonno = req.body.secondpersonno;
  
    prsonal.query(
      "INSERT INTO emergencycontact (username,firstpersonname,firstpersonno,secondpersoname,secondpersonno) VALUES (?,?,?,?,?)",
      [username, firstpersonname, firstpersonno, secondpersoname, secondpersonno],
      (err, result) => {
        console.log(err);
      }
    );
  });
  exports.emergencycontactget=app.get("/personaldetailsgetemergencycontact", (req, res) => {
    prsonal.query("SELECT * FROM emergencycontact", (err, result) => {
      res.send(result);
    });
  });
  exports.emergencycontactdelete=app.delete("/personaldetailsdeleteemergencycontact/:username", (req, res) => {
    const username = req.params.username;
    prsonal.query(
      "DELETE FROM emergencycontact WHERE username=?",
      username,
      (err, result) => {
        if (err) {
          console.log(error);
        } else {
          res.send(result);
        }
      }
    );
  });
  
  exports.infogendetailspost=app.post("/personaldetailsinfogendetails", (req, res) => {
    const username = req.body.username;
    const skillexp = req.body.skillexp;
    const skillknow = req.body.skillknow;
    const yearofexp = req.body.yearofexp;
    const certificate = req.body.certificate;
  
    prsonal.query(
      "INSERT INTO infogendetails (username,skillexp,skillknow,yearofexp,certificate) VALUES (?,?,?,?,?)",
      [username, skillexp, skillknow, yearofexp, certificate],
      (err, result) => {
        console.log(err);
      }
    );
  });
  
  exports.infogendetailsget=app.get("/personaldetailsgetinfogendetails", (req, res) => {
    prsonal.query("SELECT * FROM infogendetails", (err, result) => {
      res.send(result);
    });
  });

  exports.infogendetailsdelete=app.delete("/personaldetailsdeleteinfogendetails/:username", (req, res) => {
    const username = req.params.username;
    prsonal.query(
      "DELETE FROM infogendetails WHERE username=?",
      username,
      (err, result) => {
        if (err) {
          console.log(error);
        } else {
          res.send(result);
        }
      }
    );
  });
  exports.personalinformationpost=app.post("/personaldetailspersonalinformation", (req, res) => {
    const username = req.body.username;
    const employeecode = req.body.employeecode;
    const firstname = req.body.firstname;
    const middlename = req.body.middlename;
    const lastname = req.body.lastname;
    const gender = req.body.gender;
    const dateofbirth = req.body.dateofbirth;
    const mobileno = req.body.mobileno;
    const emailid = req.body.emailid;
    const address = req.body.address;
    const passportno = req.body.passportno;
    const bloodgroup = req.body.bloodgroup;
  
    prsonal.query(
      "INSERT INTO personalinformation (username,employeecode,firstname,middlename,lastname,gender,dateofbirth,mobileno,emailid,address,passportno,bloodgroup) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        username,
        employeecode,
        firstname,
        middlename,
        lastname,
        gender,
        dateofbirth,
        mobileno,
        emailid,
        address,
        passportno,
        bloodgroup,
      ],
      (err, result) => {
        console.log(err);
      }
    );
  });
  
  exports.personalinformationget=app.get("/personaldetailsgetpersonalinformation", (req, res) => {
    prsonal.query("SELECT * FROM personalinformation", (err, result) => {
      res.send(result);
    });
  });
  exports.personalinformationdelete=app.delete(
    "/personaldetailsdeletepersonalinformation/:username",
    (req, res) => {
      const username = req.params.username;
      prsonal.query(
        "DELETE FROM personalinformation WHERE username=?",
        username,
        (err, result) => {
          if (err) {
            console.log(error);
          } else {
            res.send(result);
          }
        }
      );
    }
  );