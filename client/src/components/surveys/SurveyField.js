// SurveyField contains the logic to render a single
// label and text input
import React from 'react';

export default props => {
	return (
		<div className="form-group">
			<div>
				<label >{props.label}</label>
				<input {...props.input} style={{ marginBottom: '5px' }} className="form-control col-md-8"/>
				<div style={{ marginBottom: '20px', color:'red' }}>
					{props.meta.touched && props.meta.error}
				</div>
			</div>
		</div>
	);
};
