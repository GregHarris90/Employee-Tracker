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

const startOptions = () => {
    inquirer.prompt([
        {
            name: 'menu',
            type: 'list',
            message: 'Please select which action you would like to take:',
            choices: ['View All Employees', 'View All Employees By Department', 'View All Employees By Manager', 'Add Employee', 'Remove Employee', 'Update Employee Role', 'Update Employee Manager', 'View All Roles', 'EXIT'],
        },
    ]).then((answer) => {
        switch (answer.menu) {
            case 'View All Employees':
                viewAllEmployees();
                break;
            case 'View All Employees By Department':
                viewAllByDepartment();
                break;
            case 'View All Employees By Manager':
                viewAllByManager();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Remove Employee':
                removeEmployee();
                break;
            case 'Update Employee Role':
                updateRole();
                break;
            case 'Update Employee Manager':
                updateManager();
                break;
            case 'View All Roles':
                viewAllRoles();
            case 'EXIT':
                connection.end();
                break;
        }

    })
}

// Setup separate functions with inquirer for each list option
// Setup view all employees functions
// Setup add employee
// Setup update employee
// Setup remove employee


const viewAllEmployees = () => {
    connection.query('SELECT * FROM employee;', (err, res) => {
        if (err) throw err;

        console.log("LIST OF ALL EMPLOYEES:")
        console.table(res);
        startOptions();
    });
};

const addEmployee = () => {

}

const removeEmployee = () => {

}

const updateRole = () => {

}




// Connect to the mysql server & sql database
connection.connect((err) => {
    if (err) throw err;
    startOptions();
    console.log(`Connected with id ${connection.threadId}`);
});