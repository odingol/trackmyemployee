INSERT INTO department (names)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('IT'),
('Production');

INSERT INTO roles (title, salary, department_id)
VALUES
('Sales Manager', 155000, 1),
('Account Manager', 105000, 1),
('Civil Engineer', 80000, 2),
('Contract Engineer', 75000, 2),
('Software Engineer', 165000, 2),
('Financial Analyst', 125000, 3),
('Accountant', 65000, 3),
('Systems Analyst', 55000, 4),
('System Administrator', 50000, 4),
('Production Opeartor', 48000, 5),
('Production Associate', 35000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Kim', 'Stone', 1, NULL),
('James', 'Bridge', 2, NULL),
('Zane', 'Richardson', 3, NULL),
('Kyle', 'Brumley', 4, NULL),
('Nicole', 'Peterson', 5, NULL),
('Zack', 'Parker', 6, NULL),
('Tony', 'Roberts', 7, NULL),
('Mason', 'Bridge', 8, NULL),
('Aubrey', 'Summers', 9, NULL),
('Tina', 'Lee', 10, NULL),
('Hannah', 'Stevens', 11, NULL)


