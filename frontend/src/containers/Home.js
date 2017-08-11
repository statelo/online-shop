import React, { Component } from 'react';
import { Navbar, Body } from '../components';
import { connect } from 'react-redux';
import { requestLogout, requestSocialLogin } from '../actions/authentication';

class Home extends Component {
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
					socialLogin={this.props.socialLogin}
				/>
				<Body/>
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
		socialLogin: () => {
			return dispatch(requestSocialLogin());
		}
	}
}

Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;