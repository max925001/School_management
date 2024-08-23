const schoolModel = require('../models/schoolModel');

const addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || !latitude || !longitude) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const newSchool = { name, address, latitude, longitude };

    schoolModel.addSchool(newSchool, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to add school' });
        }
        res.status(201).json({ message: 'School added successfully', schoolId: results.insertId });
    });
};

const listSchools = (req, res) => {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        return res.status(400).json({ error: 'Latitude and longitude are required' });
    }

    schoolModel.getAllSchools((err, schools) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve schools' });
        }

        const sortedSchools = schools.sort((a, b) => {
            const distanceA = Math.sqrt(
                Math.pow(latitude - a.latitude, 2) + Math.pow(longitude - a.longitude, 2)
            );
            const distanceB = Math.sqrt(
                Math.pow(latitude - b.latitude, 2) + Math.pow(longitude - b.longitude, 2)
            );
            return distanceA - distanceB;
        });

        res.status(200).json(sortedSchools);
    });
};

module.exports = {
    addSchool,
    listSchools,
};
