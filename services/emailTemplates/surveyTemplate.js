const keys = require('../../config/keys');

module.exports = survey => {
	return `
		<html>
			<body>
				<div style="text-align: center;">
					<h3>I'do like your input!</h3>
					<p>Please answer the following question:</p>
					<p>${survey.body}</p>
					<div>
						<a href='${keys.redirectDomain}/api/surveys/${survey.id}/1'>1</a>
					</div>
					<div>
						<a href='${keys.redirectDomain}/api/surveys/${survey.id}/2'>2</a>
					</div>
					<div>
						<a href='${keys.redirectDomain}/api/surveys/${survey.id}/3'>3</a>
					</div>
					<div>
						<a href='${keys.redirectDomain}/api/surveys/${survey.id}/4'>4</a>
					</div>
					<div>
						<a href='${keys.redirectDomain}/api/surveys/${survey.id}/5'>5</a>
					</div>
				</div>
			</body>
		</html>
	`;
};
