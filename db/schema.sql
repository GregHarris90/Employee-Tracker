-- Setup database for departments, roles, employees --
DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;


CREATE TABLE department(
    dept_id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (dept_id)
);

-- SELECT * FROM department;

CREATE TABLE roles(
    role_id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (role_id),
    FOREIGN KEY (department_id) REFERENCES department(dept_id)
);

-- SELECT * FROM roles;

CREATE TABLE employee(
    employ_id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_num INT,
    manager_id INT,
    PRIMARY KEY (employ_id),
    FOREIGN KEY (role_num) REFERENCES roles(role_id),
    FOREIGN KEY (manager_id) REFERENCES roles(role_id)
);

-- SELECT * FROM employee;

