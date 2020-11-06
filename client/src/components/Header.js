import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return;
			default:
				return [
					<li className="nav-item" key="1">
						<span className="navbar-text">
							Credits: {this.props.auth.credits}
						</span>
					</li>,
					<li className="nav-item" key="2">
						<Payments />						
					</li>,
					<li className="nav-item" key="3">
						<a className="nav-link" href="/api/logout">Logout</a>
					</li>
				];
		}
	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<Link
						to={this.props.auth ? '/surveys' : '/'}
						className="navbar-brand"
					>
						Feedback Collector
					</Link>
					<ul className="navbar-nav ml-auto">{this.renderContent()}</ul>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
