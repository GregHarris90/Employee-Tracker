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

const viewAllEmployees = () => {
    connection.query(`SELECT employee.employ_id, employee.first_name, employee.last_name, roles.title, roles.salary, department.name FROM employee INNER JOIN roles ON(employee.role_num = roles.role_id) INNER JOIN department ON(roles.department_id = department.dept_id)`, (err, res) => {
        if (err) throw err;

        console.log('\n', "LIST OF ALL EMPLOYEES:", '\n');
        console.table(res);
        startOptions();
    });
};

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
    connection.query('SELECT employ_id, first_name, last_name FROM employee WHERE manager_id IS null', (err, res) => {
        if (err) throw err;

        console.log('\n', "LIST OF ALL MANAGERS:", '\n');
        console.table(res);
        startOptions();
    });
}

//================================================================

// ADD/REMOVE FUNCTIONS:

const addEmployee = () => {
    connection.query('SELECT * FROM roles', (err, results) => {
        if (err) throw err;

        inquirer.prompt([
            {
                name: 'first',
                type: 'input',
                message: 'What is their first name?'
            },
            {
                name: 'last',
                type: 'input',
                message: 'What is their last name?'
            },
            {
                name: 'role',
                type: 'list',
                choices() {
                    const roleArray = [];
                    results.forEach(({ title }) => {
                        roleArray.push(title);
                    });
                    return roleArray;
                },
                message: 'What is their role in the store?',
            },

        ]).then((answer) => {
                let chosenRole;
                results.forEach((role) => {
                    if (role.role_num === answer.choice) {
                        chosenRole = role_num;
                    }
                });

                connection.query(
                    'INSERT INTO employee SET ?',
                    {
                        first_name: answer.first,
                        last_name: answer.last,
                        role_num: chosenRole,
                    },
                    (err) => {
                        if (err) throw err;
                        console.log('\n', 'This employee has been added to your database!', '\n');
                        startOptions();
                    }
                )
        }   )
    }
    
)}

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