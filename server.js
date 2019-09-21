require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const faker = require("faker");

const app = express();

app.use(express.urlencoded({ extended: true }));

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "mailing_list"
});


app.get("/", (req, res) => {
  const q = "SELECT COUNT(*) as count FROM users";
  connection.query(q, (error, results) => {
    if (error) throw error;
    const msg = `We have ${results[0].count} users`;
    res.send(msg);
  });
});

app.post("/register", (req, res) => {
  const newUser = { email: req.body.email };
  connection.query("INSERT INTO users SET ?", newUser, (err, result) => {
    if (err) {
      console.log(err);
      res.statusCode(500);
    }
    console.log(result);
    res.redirect("/");
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
