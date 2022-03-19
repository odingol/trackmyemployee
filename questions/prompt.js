// Database is requested to connecting roles, employees with manager id's, and connecting departments from the db 
const db = require('../config/connection');

const startMenu = [
    {
        type: "list",
        name: "options",
        message: "Hello, what would you like to do today?",
        choices: ["View departments", "View roles", "View employees", "Add a department", "Add a role", "Add employee(s)", "Update an employee role", "Quit"],
        default: "View departments"
    }
];

const addEmployee = [
    {
        type: "input",
        name: "firstName",
        message: "What is the employee's first name?"
    },
    {
        type: "input",
        name: "lastName",
        message: "What is the employee's last name?"
    },
    {
        type: "list",
        name: "role",
        message: "What is the employee's role in the company?",
        choices: async () => {
            try {
                const outcome = await db.promise().query('SELECT title AS name, id AS value FROM roles')
                return outcome[0];
            } catch (err) {
                throw err;
            }
        }
    },
    {
        type: "list",
        name: "manager",
        message: "Who is the employee's manager in the company?",
        choices: async () => {
            try{
                const outcome = await db.promise().query('SELECT CONCAT(first_name, " ", last_name) AS name, id AS value FROM employee');
                return outcome[0];
            } catch (err) {
                throw err;
            }
        }
    }
];

const addRole = [
    {
        type: "input",
        name: "title",
        message: "What is the name of the role?"
    },
    {
        type: "input",
        name: "salary",
        message: "What is the estimated salary of the role?"
    },
    {
        type: "list",
        name: "department",
        message: "Which department does the employee belong to?",
        choices: async () => {
            try{
                const outcome = await db.promise().query('SELECT names AS name, id AS value FROM department');
                return outcome[0];
            } catch (err) {
                throw err;
            }
        }
    }
];

const addDepartment = [
    {
        type: "input",
        name: "deptNames",
        message: "What is the name of the department?"
    }
];

const updateEmployee = [
    {
        type: "list",
        name: "update",
        message: "Who is the employee you wish to update their role?",
        choices: async () => {
            try{
                const outcome = await db.promise().query('SELECT CONCAT(first_name, " ", last_name) AS name, id AS value FROM employee');
                return outcome[0];
            } catch (err) {
                throw err;
            }
        }
    },
    {
        type: "list",
        name: "newRole",
        message: "What is this employee's new role?",
        choices: async () => {
            try{
                const outcome = await db.promise().query('SELECT title AS name, id AS value FROM roles');
                return outcome[0];
            } catch (err) {
                throw err;
            }
        }
    }
];

module.exports = {startMenu, addEmployee, addRole, addDepartment, updateEmployee};


