require('dotenv').config()
const mysql = require('mysql');

console.log(process.env.DB_PASSWORD)
const db = mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',      // Use environment variable or fallback to 'localhost'
    user: process.env.DB_USER || 'root',           // Use environment variable or fallback to 'root'
    password: process.env.DB_PASSWORD || 'Pandey925@#', // Use environment variable or fallback to your password
    database: process.env.DB_NAME || 'school_management'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

module.exports = db;
