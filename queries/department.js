const mysql = require('mysql2');
const inquirer = require('inquirer');
const ctable = require('console.table');


function listDepartment() {
  db.query('SELECT * from department', function (err, results) {
    console.log(results);
  });
};

module.exports = listDepartment;