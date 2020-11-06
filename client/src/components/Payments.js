import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';
// Here token is a callback property

class Payments extends Component {
	render() {
		return (
			<StripeCheckout
				name="Feedback Collector"
				description="$5 for 5 Email Credits"
				amount={500}
				token={token => this.props.handleToken(token)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<a className="nav-link">+ Credits</a>
			</StripeCheckout>
		);
	}
}

export default connect(
	null,
	actions
)(Payments);
