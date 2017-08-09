import React from 'react';
import { Login, Registration } from '../components';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
	requestLogin,
	requestSignup
} from '../actions/authentication';

class Authentication extends React.Component {
	constructor(props) {
		super(props);

		this.successLogin = this.successLogin.bind(this);
		this.successSignup = this.successSignup.bind(this);
	}

	successLogin(id, pwd) {
		this.props.successLogin(id, pwd).then(() => {
			if(this.props.login_status === "SUCCESS") {
				this.props.history.push('/');
			} else {
				this.props.history.push('/auth/login')
			}
		});
	}

	successSignup(username, password, password_repeat, first_name, last_name) {
		this.props.successSignup(username, password, password_repeat, first_name, last_name).then(() => {
			if(this.props.signup_status === "SUCCESS") {
				this.props.history.push('/');
			} else if(password !== password_repeat) {
				this.props.history.push('/auth/signup');
			}
		})
	}

	render() {
		const LoginComponent = (props) => {
  		return(
		  	<Login
		  		login_status={this.props.login_status}
		  		successLogin={this.successLogin}
		  	/>
  		)
  	}

  	const RegistrationComponent = (props) => {
  		return(
  			<Registration
  				signup_status={this.props.signup_status}
  				successSignup={this.successSignup}
  			/>
  		)
  	}

		return(
			<div>
				<Route 
					path={`${this.props.match.url}/login`} 
					component={LoginComponent}
				/>
				<Route 
					path={`${this.props.match.url}/signup`} 
					component={RegistrationComponent}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		login_status: state.login_status,
		signup_status: state.signup_status
	}
}

const mapDispatchToProps = dispatch => {
	return {
		successLogin: (username, password) => {
			return dispatch(requestLogin(username, password));
		},
		successSignup: (username, password, password_repeat, first_name, last_name) => {
			return dispatch(requestSignup(username, password, password_repeat, first_name, last_name));
		}
	}
}

Authentication = connect(mapStateToProps, mapDispatchToProps)(Authentication);

export default Authentication;