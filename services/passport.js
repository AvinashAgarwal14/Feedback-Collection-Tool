const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

//Used by passport to set a cookie( i.e cookie based authentication)
passport.serializeUser((user, done) => {
	done(null, user.id);
});

// To turn cokkie into user again
passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

//new GoogleStrategy creates a new instance of the passport strategy.
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true // To change http req to https
		},
		async (accessToken, refreshToken, profile, done) => {
			//(accessToken, refreshToken, profile, done)
			const existingUser = await User.findOne({ googleId: profile.id });
			if (existingUser) {
				// we already have a record with the given id
				return done(null, existingUser);
			}
			// We create a new User
			const user = await new User({ googleId: profile.id }).save();
			done(null, user);
		}
	)
);
