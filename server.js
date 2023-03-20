
// Import and require mysql2, inquirer and console.table
const mysql = require('mysql2');
const inquirer = require('inquirer');
const ctable = require('console.table');


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
inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'menu',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
    }
  ]);
// How do I make the inquirer prompt function like a menu?

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
