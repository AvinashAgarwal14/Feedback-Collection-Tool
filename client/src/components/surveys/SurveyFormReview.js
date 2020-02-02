//SurveyFormReview shows user their user inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyFormReview = props => {
	const reviewFields = _.map(formFields, field => {
		return (
			<div key={field.name}>
				<label>{field.label}</label>
				<div>{props.formValues[field.name]}</div>
			</div>
		);
	});

	return (
		<div>
			<h5>Please confirm your Entries:</h5>
			<div>{reviewFields}</div>
			<button
				className="yellow darken-3 white-text btn-flat"
				onClick={props.onCancel}
			>
				Back
			</button>
			<button
				onClick={() => props.submitSurvey(props.formValues, props.history)}
				className="green white-text btn-flat right"
			>
				Send Survey
				<i className="material-icons right">email</i>
			</button>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		formValues: state.form.surveyForm.values
	};
}

export default connect(
	mapStateToProps,
	actions
)(withRouter(SurveyFormReview));
