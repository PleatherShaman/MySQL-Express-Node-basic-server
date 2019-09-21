const express = require('express');
var mysql = require('mysql');

const app = express();

app.use(express.urlencoded({extended: true}));

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : 'mailing_list'
  });


const PORT = process.env.PORT || 5000 ;


app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})

