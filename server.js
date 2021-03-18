// Dependencies

const cTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql');

// Setup Connection to db

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'MyCodingCamp90!',
    database: 'employees_db',
  });

// Setup start function with inquirer that opens list of options

// const start = () => {}

// Setup first prompt for questions with list

// Setup separate functions with inquirer for each list option











// Connect to the mysql server & sql database
connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected with id ${connection.threadId}`);
    connection.end();
    // start();
  });