const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongo = require('./database');
const ObjectID = require('mongodb').ObjectID;

passport.use(new LocalStrategy(authentication));

function authentication(email, password, done) {
	mongo.db.collection('users')
		.findOne({ email: email })
		.then((user) => {
			if(!user || user.password !== password) {
				done(null, false, {message: "Invalid Credentials"})
			}

			done(null, user)
		}, done)
}

passport.serializeUser(function(user, done) {
	done(null, user._id);
})

passport.deserializeUser(function(id, done) {
	let _id = new ObjectID(id);

	mongo.db.collection('users')
		.findOne({_id: _id})
		.then((user) => {
			done(null, user);
		}, done)
})