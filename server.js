const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();

// Import routes
const authRoute = require('./server/routes/Authentication');

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology: true, useNewUrlParser: true})
.then( () => console.log('Connected to db~'));

// Middlewares
app.use(express.json());

// Route Middlewares
app.use('/api/users', authRoute);

app.listen(PORT, () => console.log('Server started~ <3'));