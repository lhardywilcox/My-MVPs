const mysql = require('mysql2');
const inquirer = require('inquirer');
const ctable = require('console.table');

addDepartment = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the name of the department you would like to add?',
        name: 'department',
      }
    ])

    .then((answer) => {
      let answer = answer.name;
      db.query('INSERT INTO department', function (err, results) {
        console.table()
      })
    })

}

module.exports = listDepartment;