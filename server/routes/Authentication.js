const router = require('express').Router();
const User = require('../models/User');

// Validation

const Joi = require('@hapi/joi');

const accountValidationSchema = Joi.object().keys({
    name: Joi.string().min(3).required(),
    email: Joi.string().min(6).required().email(),
    // One uppercase, one lowercase, one number
    password: Joi.string().min(6).max(16).required(),
    repeat_password: Joi.ref('password'),
});


router.post('/signup', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    //Validate before saving
    // const {error} = accountValidationSchema.validate(req.body);
    // if (error) return res.status(400).send(error);

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/login', (res, req) => {

});

module.exports = router;