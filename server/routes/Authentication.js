const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const {signUpValidation, loginValidation} = require('../validation/validation');


router.post('/signup', async (req, res) => {
    // Validate before making a new user
    const {error} = signUpValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Check for duplicate emails
    if (await User.findOne({email: req.body.email})) return res.status(400).send('Email already exists');

    // Hash password before storing in db
    const hashPassword = await bcrypt.hash(req.body.password, await bcrypt.genSalt());

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
    })

    try {
        await user.save();
        res.send({user: user._id});
    } catch (error) {
        res.send(error);
    }
});

router.post('/login', async (req, res) => {
    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Check if email is in db
    const userInDB = await User.findOne({email: req.body.email});
    if (!userInDB) return res.status(400).send('Invalid email');
    
    // Check password
    const validPassword = await bcrypt.compare(req.body.password, userInDB.password);
    if (!validPassword) return res.status(400).send('Invalid password');

    // Create and assign JWT
    const token = jwt.sign({_id: userInDB._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
});

module.exports = router;