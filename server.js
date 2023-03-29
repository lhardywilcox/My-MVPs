
// Import and require mysql2, inquirer and console.table
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const ctable = require('console.table');
const listDepartment = require('./queries/department');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    user: 'root',
    password: 'loversdreamersme',
    database: 'associates_db'
  },
  console.log(`Connected to the associates_db database.`)
);

// Inquirer menu
const startMenu = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What would you like to do?',
        name: 'menu',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
      }
    ])

    .then((answers) => {
      /* console.log(answers); Used to find out what the answer was listed under.*/
      if (answers.menu === 'View all departments') {
        db.query('SELECT * from department', function (err, results) {
          console.log(results); /* Used to see what results were being pulled from the database. */
          console.table(results);
        });
      }
      /*   if(answers.choice[1]) {
  
        }
        if (answers.choice[2]) {
  
        }
        if (answers.choice[3]) {
          
        }
        if (answers.choice[4]) {
          
        }
        if (answers.choice[5]) {
          
        }
        if (answers.choice[6]) {
          
        } 
    .prompt([
      {  
        type: 'list',
        message: 'What would you like to do?',
        name: 'start',
        choices: ['Yes', 'No'],
      }
    ])
    
    .then((answers) => {
      if (answers.choices === 'Yes'){
        startMenu();
      } else {

        break;
      }*/
    });
};
// How do I make the inquirer prompt function like a menu?

/* startMenu(); */

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

startMenu();