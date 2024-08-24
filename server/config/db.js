require('dotenv').config()
const mysql = require('mysql');

console.log(process.env.DB_PASSWORD)
const db = mysql.createConnection({
        host:  'localhost' || process.env.DB_HOST ,
        user:  'root' || process.env.DB_USER,
        password:  'Pandey925@#' || process.env.DB_PASSWORD,
        database:  'school_management' || process.env.DB_NAME ,  
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

module.exports = db;
