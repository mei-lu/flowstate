const router = require('express').Router();
const verifyToken = require('../validation/verifyToken');

// Private route for getting user focus data
router.get('/focus-time', verifyToken, (req, res) => {
    res.send('Got my focus time!')
});

module.exports = router;