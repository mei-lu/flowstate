const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// Import routes
const authRoute = require('./server/routes/Authentication');
const statsRoute = require('./server/routes/Stats');

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology: true, useNewUrlParser: true})
.then(() => console.log('Connected to db~'));

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Route Middlewares
// app.use('/api/users', authRoute);
app.use('/api/stats', statsRoute);
app.use('/api', authRoute);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log('Server started~ <3'));