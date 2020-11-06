import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	renderSurveys() {
		return this.props.surveys.reverse().map(survey => {
			return (
				<div className="card" key={survey._id}>
					<h5 class="card-header text-center">Sent On: {new Date(survey.dateSent).toLocaleDateString()}</h5>
					<div className="card-body">
						<h4 className="card-title">{survey.title}</h4>
						<p className="card-text">{survey.body}</p>
						<p className="right">
							
						</p>
					</div>
					<div className="card-action">
						<a>Yes: {survey.yes}</a>
						<a>No: {survey.no}</a>
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
