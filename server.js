// DEPENDENCIES:

const cTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql');

// CONNECTION TO DATABASE:

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'MyCodingCamp90!',
    database: 'employees_db',
});

//================================================================

// startOptions function begins application

const startOptions = () => {
    inquirer.prompt([
        {
            name: 'menu',
            type: 'list',
            message: 'Please select which action you would like to take:',
            choices: ['View All Employees', 'View All Departments', 'View All Roles', 'View All Managers', 'Add Employee', 'Remove Employee', 'Update Employee Role', 'Update Employee Manager', 'EXIT'],
        },
    ]).then((answer) => {
        switch (answer.menu) {
            case 'View All Employees':
                viewAllEmployees();
                break;
            case 'View All Departments':
                viewAllDepartments();
                break;
            case 'View All Roles':
                viewAllRoles();
                break;
            case 'View All Managers':
                viewAllManagers();
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
            case 'EXIT':
                connection.end();
                break;
        }

    })
}

//================================================================

// VIEW FUNCTIONS:

// const viewAllEmployees = () => {
//     let query = 
//         `SELECT employee.employ_id, employee.first_name, employee.last_name, employee.role_num, employee.manager_id, roles.title, roles.salary, role.department_id FROM employee INNER JOIN roles ON (employee.role_num = roles.title)`

//     connection.query('SELECT employ_id, first_name, last_name FROM employee;', (err, res) => {
//         if (err) throw err;

//         console.log('\n', "LIST OF ALL EMPLOYEES:", '\n');
//         console.table(res);
//         startOptions();
//     });
// };

const viewAllDepartments = () => {
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;

        console.log('\n', "LIST OF ALL DEPARTMENTS:", '\n');
        console.table(res);
        startOptions();
    });
};

const viewAllRoles = () => {
    connection.query('SELECT role_id, title, salary FROM roles', (err, res) => {
        if (err) throw err;

        console.log('\n', "LIST OF ALL ROLES:", '\n');
        console.table(res);
        startOptions();
    });
};

const viewAllManagers = () => {
    let query =`SELECT employee.first_name, employee.last_name FROM employee WHERE ?`;
    connection.query(query, {manager_id: null},(err, res) => {
        if (err) throw err;

        console.log('\n', "LIST OF ALL MANAGERS:", '\n');
        console.table(res);
        startOptions();
    });
}

//================================================================

// ADD/REMOVE FUNCTIONS:

// const addEmployee = () => {

//     inquirer.prompt([
//         {
//             name: 'first',
//             type: 'input',
//             message: 'What is their first name?'
//         },
//         {
//             name: 'last',
//             type: 'input',
//             message: 'What is their last name?'
//         },
//         {
//             name: 'role',
//             type: 'list',
//             message: 'What is their role in the store?',
//             choices: ["Store Manager", "Grocery Clerk", "Checker", "Courtesy", "Deli Manager", "Deli Clerk", "Produce Manager", "Produce Clerk", "Dairy Manager", "Dairy Clerk", "Meat Manager", "Meat Clerk"]
//         },
//         {
//             name: 'manager',
//             type: 'number',
//             message: 'What is their manager ID? (00 N/A, 01 Store, 05 Deli, 07 Produce, 09 Dairy, or 11 Meat)',
//             validate(value) {
//                 if (value == 00 || 01 || 05 || 07 || 09 || 11) {
//                     return !isNaN(value);
//                 } else if (value !== 00 || 01 || 05 || 07 || 09 || 11) {
//                     console.log('This is not a valid number. Try again!')
//                 }
//             }
//         },
//     ]).then((answer) => {
//         connection.query(
//             'INSERT INTO employee SET ?',
//             {
//                 first_name: answer.first,
//                 last_name: answer.last,
//                 role_num: answer.role,
//                 manager_id: answer.manager
//             },
//             (err) => {
//                 if (err) throw err;
//                 console.log('\n', 'This employee has been added to your database!', '\n');
//                 startOptions();
//             }
//         )
//     })
// }

// const removeEmployee = () => {

// }


//================================================================

// UPDATE FUNCTIONS:

// const updateRole = () => {

// }

// const updateManager = () => {

// }



// Connect to the mysql server & sql database
connection.connect((err) => {
    if (err) throw err;
    startOptions();
    console.log(`Connected with id ${connection.threadId}`);
});