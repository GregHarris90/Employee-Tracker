-- Setup data to INSERT INTO database to pre-populate it with information --
-- 3 tables in employee_db:
    -- 1) department (dept_id(PK), name)
    -- 2) roles (role_id(PK), title, salary, department_id)
    -- 3) employee (employ_id(PK), first_name, last_name, role_num, manager_id)


USE employees_db;

INSERT INTO department (name)
VALUES ("Grocery"), ("Checking"), ("Deli"), ("Produce"), ("Dairy"), ("Meat");

-- USE employees_db;

INSERT INTO roles (title, salary, department_id)
VALUES ("Store Manager", 90000, 1),
("Grocery Clerk", 35000, 1),
("Checker", 40000, 2), 
("Courtesy", 25000, 2),
("Deli Manager", 50000, 3),
("Deli Clerk", 35000, 3),
("Produce Manager", 50000, 4),
("Produce Clerk", 40000, 4),
("Dairy Manager", 45000, 5),
("Dairy Clerk", 35000, 5),
("Meat Manager", 55000, 6),
("Meat Clerk", 40000, 6);

-- USE employees_db;

INSERT INTO employee (first_name, last_name, role_num, manager_id)
VALUES ("Bob", "Brown", 1, null),
("Susan", "Clark", 2, 1),
("Frank", "Johnson", 2, 1),
("Erik", "Smith", 3, 1),
("Fran", "Gunderson", 4, 1),
("Jennifer", "Larson", 5, null),
("Derrick", "Doe", 6, 5),
("Matt", "Yard", 7, null),
("Ted", "Rainer", 8, 7),
("Donnie", "Darko", 8, 7),
("Lindsey", "Forrel", 9, null),
("Adam", "Anders", 10, 9),
("Keagan", "Forrest", 10, 9),
("Larry", "Finestead", 11, null),
("Hanna", "Hogan", 12, 11),
("Jill", "Jefferson", 12, 11);

