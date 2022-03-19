const inquirer = require('inquirer');
const db = require('./config/connection');
require('console.table');


const {startMenu, addEmployee, addRole, addDepartment, updateEmployee} = require('./questions/prompt');


// Testing the connection to the employees_db
db.connect((err) => {
    if (err) {
        throw err;
    } else {
        initialPrompt()
    }
});



const initialPrompt = () => {
    inquirer.prompt(startMenu).then((response) => {
        switch(response.options) {
            case "View departments":
                viewDepartments();
                break;
            case "View roles":
                viewRoles();
                break;
            case "View employees":
                viewEmployees();
                break;
            case "Add a department":
                gainDpt();
                break;
            case "Add a role":
                gainRole();
                break;
            case "Add employee(s)":
                gainEmployee();
                break;
            case "Update an employee role":
                updateEmployeeRole();
                break;
            case "Quit":
                console.log("----------------------");
                console.log("See you next time!");
                console.log("----------------------");
                db.end();
                break;
            default:
              db.end();
        }
    });
};

// Using queries to view the available departments, roles, and employees

const viewDepartments = () => {
    db.query('SELECT * FROM department', (err, res) => {
        // (err) ? console.log(err) : console.table(res); initialPrompt();
        if(err) {
            console.log(err);
        }
        else {
            console.table(res);
            initialPrompt();
        }
    });
};

const viewRoles = () => {
    db.query('SELECT * FROM roles', (err, res) => {
        (err) ? console.log(err) : console.table(res); initialPrompt();
    });
};

const viewEmployees = () => {
    db.query('SELECT * FROM employee', (err, res) => {
        (err) ? console.log(err) : console.table(res); initialPrompt();
    });
};


// Using queries to add new entries from the prompt.js file

const gainDpt = () => {
    inquirer.prompt(addDepartment)
    .then((response) => {
        db.query('INSERT INTO department (names) VALUES (?)', response.deptNames, (err, res) => {
            (err) ? console.log(err) : console.log(`The ${response.deptNames} department has been successfully added to the department table!`); initialPrompt();
        })
    });
};

const gainRole = () => {
    inquirer.prompt(addRole)
    .then((response) => {
        db.query(`INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`, [response.title, response.salary, response.department], (err, res) => {
            (err) ? console.log(err) : console.log(`The ${response.title} has been succesfully added to the roles table!`); initialPrompt();
        })
    });
};


const gainEmployee = () => {
    inquirer.prompt(addEmployee)
    .then((response) => {
        db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [response.firstName, response.lastName, response.role, response.manager], (err, res) => {
            (err) ? console.log(err) : console.log(`${response.firstName} ${response.lastName} has been successfully added to the employees table!`); initialPrompt();
        });
    });
};

const updateEmployeeRole = () => {
    inquirer.prompt(updateEmployee)
    .then((response) => {
        db.query('UPDATE employee SET role_id = ? WHERE id = ?', [response.update, response.newRole], (err, res) => {
            (err) ? console.log(err) : console.log('Employee has been successfully updated!'); initialPrompt();
        })
    });
};












