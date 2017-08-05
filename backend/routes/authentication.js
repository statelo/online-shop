const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res, next) => {
	res.json({
		session: req.session,
		user: req.user,
		authenticated: req.isAuthenticated()
	})
})

router.post('/login', passport.authenticate('local'), (req, res) => {
	res.json({
		authenticated: req.isAuthenticated(),
		user: req.user
	})
})

router.get('/logout', (req, res, next) => {
	req.session.destroy((err) => {
		res.redirect('/auth');
	})
})

router.post('/signup', passport.authenticate('local-registration'), (req, res) => {
	res.redirect('/auth');
})

module.exports = router;