require('dotenv').config()
const express = require('express');
const  mysql = require('mysql');
const faker = require('faker');


const app = express();

app.use(express.urlencoded({extended: true}));

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',    
    password : process.env.MYSQL_PASSWORD,
    database : 'mailing_list'
  });

  const q = 'SELECT CURDATE()'

  connection.query(q, (error, results, fields)=>{
      if(error){
          console.log(error)
      };
      console.log (`${results}`)
      console.log (`${fields}`)
  })


  console.log(faker.internet.email())

const PORT = process.env.PORT || 5000 ;


app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})

