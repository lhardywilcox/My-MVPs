
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

// Query database
db.query('SELECT * FROM course_names', function (err, results) {
    console.log(results);
  });

// Hardcoded query: DELETE FROM course_names WHERE id = 3;
db.query(`DELETE FROM course_names WHERE id = ?`, 3, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
