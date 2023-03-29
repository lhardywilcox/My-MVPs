const mysql = require('mysql2');
const inquirer = require('inquirer');
const ctable = require('console.table');


db.query('SELECT * from employee', function (err, results) {
    console.log(results);
  });