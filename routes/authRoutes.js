const passport = require('passport');

module.exports = app => {
	// To initiate Oauth Flow
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	// To get actual user profile
	app.get(
		'/auth/google/callback/',
		passport.authenticate('google'),
		(req, res) => {
			res.redirect('/surveys');
		}
	);

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};
