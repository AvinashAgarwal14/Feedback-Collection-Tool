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
			return (
				<div className="card mb-3" key={survey._id}>
					<div className="row no-gutters">
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">{survey.title}</h5>
								<p className="card-text">{survey.body}</p>
								<p className="card-text">
									<a>Yes: {survey.yes}</a>
									<a>No: {survey.no}</a>
								</p>
								<p className="card-text"><small className="text-muted">Sent On: {new Date(survey.dateSent).toLocaleDateString()}</small></p>
							</div>
						</div>
						<div className="col-md-4">
							<FeedbackChart/>
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
