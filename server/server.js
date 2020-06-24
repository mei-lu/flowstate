const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
const PORT = process.env.PORT || 5000;

// Import routes
const authRoute = require('./routes/auth');
dotenv.config();

// Connect to DB
mongoose.connect('process.env.DB_URL', { useNewUrlParser : true }, () => console.log('Connected to db~'));

// Middlewares
app.use('/api/users', authRoute);    
app.use(express.json());

app.listen(PORT, () => console.log('Server started~ <3'));