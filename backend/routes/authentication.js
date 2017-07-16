const express = require('express');
const router = express.Router();

router.get('/signup', (req, res, next) => {
	res.send('Please Sign Up');
})

module.exports = router;