const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongo = require('./database');
const ObjectID = require('mongodb').ObjectID;
const bcrypt = require('bcrypt-nodejs');
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new LocalStrategy(authentication));
passport.use('local-registration', new LocalStrategy({passReqToCallback: true}, registration));
passport.use(new FacebookStrategy({
    clientID: '210674842797146',
    clientSecret: 'e457347144dd0160cd0994b924dd6d25',
    callbackURL: "http://localhost:4001/auth/login/facebook/callback"
  }, (accessToken, refreshToken, profile, done) => {
    userWithSocialLogin(profile, done);
  }
));
passport.use(new TwitterStrategy({
    consumerKey: 'Qno702v5CCDLddEAGuZMA1f6d',
    consumerSecret: '6S5r5HAIsrTmlCTWaBcxmNDC3yiz35WDQytuq64OCYzPTCMDvl',
    callbackURL: "http://localhost:4001/auth/login/twitter/callback"
  }, (token, tokenSecret, profile, done) => {
    userWithSocialLogin(profile, done);
  }
));
passport.use(new GoogleStrategy({
    clientID: '389015494166-rnrjorsikm4uhlhpqp21hk87m7o2ilbf.apps.googleusercontent.com',
    clientSecret: 'JPc3qiUECDhLQynJyA6aF3zo',
    callbackURL: "http://localhost:4001/auth/login/google/callback"
  }, (accessToken, refreshToken, profile, done) => {
    userWithSocialLogin(profile,done)
  }
));

function userWithSocialLogin(profile, done) {
	mongo.db.collection('users').findOne({ 
			oauth_provider: profile.provider,
			oauth_name: profile.displayName
    }).then((user) => {
    	if(user) {
    		return done(null, user);
    	} else {
    		const newUser = {
    			oauth_provider: profile.provider,
    			oauth_name: profile.displayName
    		}

    		mongo.db.collection('users')
    			.insertOne(newUser)
    			.then(() => {
    				done(null, newUser);
    			})
    	}
    })
}

function authentication(email, password, done) {
	mongo.db.collection('users').findOne({ 
		email: email 
	}).then((user) => {
		if(!user || !bcrypt.compareSync(password, user.password)) {
			return done(null, false, { message: "Invalid Credentials" })
		}

		done(null, user)
	}, done)
}

function registration(req, email, password, done) {
	mongo.db.collection('users')
		.findOne({ email: email })
		.then((user) => {
			if(user) {
				return done(null, false, { message: "User with this email already been created" })
			} else if(password !== req.body.password_repeat) {
				return done(null, false, { message: "Passwords don`t match" })
			}

			const newUser = {
				first_name: req.body.first_name,
				last_name: req.body.last_name,
				email: email,
				password: bcrypt.hashSync(password),
				is_admin: 0
			}

			mongo.db.collection('users')
				.insertOne(newUser)
				.then(() => {
					done(null, newUser)
				})
		})
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