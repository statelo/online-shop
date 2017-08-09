const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res, next) => {
	res.json({
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

router.get('/login/facebook',
  passport.authenticate('facebook'));

router.get('/login/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/auth/login' }),
  function(req, res) {
    res.redirect('/');
  });

router.get('/login/twitter',
  passport.authenticate('twitter'));

router.get('/login/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/auth/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

router.get('/login/google',
  passport.authenticate('google', { scope: ['profile'] }));

router.get('/login/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = router;