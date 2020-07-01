const router = require('express').Router();
const User = require('../models/User');
const {signUpValidation, loginValidation} = require('../validation/validation');


router.post('/signup', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    //Validate before saving
    const {error} = signUpValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        res.send(error);
    }
});

router.post('/login', (res, req) => {

});

module.exports = router;