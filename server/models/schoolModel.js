const db = require('../config/db');

const addSchool = (school, callback) => {
    const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    db.query(query, [school.name, school.address, school.latitude, school.longitude], callback);
};

const getAllSchools = (callback) => {
    const query = 'SELECT * FROM schools';
    db.query(query, callback);
};

module.exports = {
    addSchool,
    getAllSchools,
};
