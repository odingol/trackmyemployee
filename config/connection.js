const dotenv = require('dotenv').config();
const mysql = require('mysql2');


const db = mysql.createConnection(

    {
        host: 'localhost',
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: 'employees_db'
    },

    console.log('Connected to employee_db')
);

module.exports = db;




