import React, { Component } from 'react';
import { Navbar } from '../components';
import { connect } from 'react-redux';
import { requestLogout, requestFacebookLogin } from '../actions/authentication';

class Header extends Component {
	constructor(props) {
		super(props);

		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout() {
		this.props.requestLogout().then(() => {
			this.props.history.push('/');
		})
	}

	render() {
		return(
			<div>
				<Navbar
					isLoggedIn={this.props.isLoggedIn}
					handleLogout={this.handleLogout}
					history={this.props.history}
					user={this.props.user}
					facebookLogin={this.props.facebookLogin}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		isLoggedIn: state.isLoggedIn,
		user: state.user
	}
}

const mapDispatchToProps = dispatch => {
	return {
		requestLogout: () => {
			return dispatch(requestLogout())
		},
		facebookLogin: () => {
			return dispatch(requestFacebookLogin());
		}
	}
}

Header = connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header;