import React from 'react';

const Landing = () => {
	return (
		<div style={{ textAlign: 'center' }}>
			<div class="jumbotron">
				<h1 class="display-4">Feedback Collector</h1>
				<p class="lead">Collect feedback from your users!</p>
				<a class="btn btn-dark btn-lg" href="/auth/google">Login With Google</a>
			</div>
		</div>
	);
};

export default Landing;
