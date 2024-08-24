require('dotenv').config()
const mysql = require('mysql2');

console.log(process.env.DB_PASSWORD)
const db = mysql.createConnection({
        host: process.env.DB_HOST,      // Use environment variable or fallback to 'localhost'
    user: process.env.DB_USER,           // Use environment variable or fallback to 'root'
    password: process.env.DB_PASSWORD, // Use environment variable or fallback to your password
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

module.exports = db;
