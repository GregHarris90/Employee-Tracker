-- Setup data to INSERT INTO database to pre-populate it with information --
-- 3 tables in employee_db:
    -- 1) department (dept_id(PK), name)
    -- 2) roles (role_id(PK), title, salary, department_id)
    -- 3) employee (employ_id(PK), first_name, last_name, role_num, manager_id)

USE employees_db;

INSERT INTO department (name)
VALUES ("Grocery"), ("Checking"), ("Deli"), ("Produce"), ("Dairy"), ("Meat");


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


INSERT INTO employee (first_name, last_name, role_num, manager_id)
VALUES ("Bob", "Brown", 1, 1),
("Susan", "Clark", 2, null),
("Frank", "Johnson", 2, null),
("Erik", "Smith", 3, null),
("Fran", "Gunderson", 4, null),
("Jennifer", "Larson", 5, 5),
("Derrick", "Doe", 6, null),
("Matt", "Yard", 7, 7),
("Ted", "Rainer", 8, null)
("Donnie", "Darko", 8, null),
("Lindsey", "Forrel", 9, 9),
("Adam", "Anders", 10, null),
("Keagan", "Forrest", 10, null),
("Larry", "Finestead", 11, 11),
("Hanna", "Hogan", 12, null),
("Jill", "Jefferson", 12, null);
