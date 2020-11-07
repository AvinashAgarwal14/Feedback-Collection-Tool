const { range } = require('lodash');
const keys = require('../../config/keys');

module.exports = survey => {
	return `
	<html>
		<body>
			<div style="text-align: center;">
					<h1>Help us improve!</h1>
					<p>${survey.body}</p>
					<div>
						<a href="${keys.redirectDomain}/api/surveys/${survey.id}/1">1</a>
						<a href="${keys.redirectDomain}/api/surveys/${survey.id}/2">2</a>
						<a href="${keys.redirectDomain}/api/surveys/${survey.id}/3">3</a>
						<a href="${keys.redirectDomain}/api/surveys/${survey.id}/4">4</a>
						<a href="${keys.redirectDomain}/api/surveys/${survey.id}/5">5</a>
					</div>
			</div>	
		</body>
	</html>
	`;
};
