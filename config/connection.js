const mysql = require('mysql2');

require('dotenv').config();

const db = mysql.createConnection(

    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: 'employees_db',
        port: 3306,
    },

    console.log('Connected to employee_db')
);

module.exports = db;




