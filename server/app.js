require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/schoolRoutes');
const morgan = require('morgan')

const app = express();

app.use(bodyParser.json());

app.use('/api', schoolRoutes);

const PORT = process.env.PORT || 10000;

app.use(morgan)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
