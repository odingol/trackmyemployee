DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;


CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT UNIQUE,
    name VARCHAR(30),
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT UNIQUE,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY(id)

    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT UNIQUE,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id)

    FOREIGN KEY (role_id)
    REFERENCES role(id)
-- Double check manager id key will reference the empoyee id number
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    
    ON DELETE SET NULL
);