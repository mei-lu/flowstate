const router = require('express').Router();
const User = require('../models/User');
const { Mongoose } = require('mongoose');

router.post('/register', async (req, res) => {
    try {
        const user = new User({
            username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        await user.save();
        res.send(user);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;