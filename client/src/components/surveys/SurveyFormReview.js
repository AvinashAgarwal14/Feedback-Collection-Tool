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
			<div className="form-group" key={field.name}>
				<label>{field.label}</label>
				<input className="form-control col-md-8" style={{ marginBottom: '5px' }} value={props.formValues[field.name]} disabled/>
			</div>
		);
	});

	return (
		<div className="jumbotron col-md-8" style={{margin:'auto'}}>
			<h5>Please confirm your Entries:</h5>
			<form>{reviewFields}</form>
			<button
				className="btn btn-danger float-left"
				onClick={props.onCancel}
			>
				Back
			</button>
			<button
				onClick={() => props.submitSurvey(props.formValues, props.history)}
				className="btn btn-success float-right"
			>
				Send Survey 
				<i className="material-icons float-right">email</i>
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
