const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
require('dotenv').config();

// Import routes
const authRoute = require('./server/routes/Authentication');
const statsRoute = require('./server/routes/Stats');

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology: true, useNewUrlParser: true})
.then( () => console.log('Connected to db~'));

// Middlewares
app.use(express.json());

// Route Middlewares
app.use('/api/users', authRoute);
app.use('/api/stats', statsRoute);
<<<<<<< HEAD

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
=======
app.use(express.static(path.join(__dirname, 'build')))
>>>>>>> a39f75461176abc17d316e14e927c242d52f5d3e

app.listen(PORT, () => console.log('Server started~ <3'));