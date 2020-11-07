import React, { Component } from 'react';
import FeedbackChart from '../FeedbackChart';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	renderSurveys() {
		return this.props.surveys.reverse().map(survey => {
			let datapoints = [survey['1'], survey['2'], survey['3'], survey['4'], survey['5']];
			return (
				<div className="card mb-3" key={survey._id}>
					<div className="row no-gutters">
						<div className="col-md-8">
							<div className="card-body">
								<h4 className="card-title">{survey.title}</h4>
								<h6 className="card-title">{survey.subject}</h6>
								<p className="card-text">{survey.body}</p>
								<p className="card-text"><small className="text-muted">Sent On: {new Date(survey.dateSent).toLocaleDateString()}</small></p>
							</div>
						</div>
						<div className="col-md-4">
							<FeedbackChart datapoints = {datapoints}/>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return <div>{this.renderSurveys()}</div>;
	}
}

function mapStateToProps(state) {
	return { surveys: state.surveys };
}

export default connect(
	mapStateToProps,
	{ fetchSurveys }
)(SurveyList);
