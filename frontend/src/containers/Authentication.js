import React from 'react';
import { Login, Registration } from '../components';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestLogin } from '../actions/authentication';

class Authentication extends React.Component {
	constructor(props) {
		super(props);

		this.successLogin = this.successLogin.bind(this);
	}

	successLogin(id, pwd) {
		this.props.successLogin(id, pwd).then(() => {
			if(this.props.status === "SUCCESS") {
				this.props.history.push('/');
			} else {
				this.props.history.push('/login');
			}
		});
	}

	render() {
		const LoginComponent = (props) => {
  		return(
		  	<Login
		  		status={this.props.status}
		  		successLogin={this.successLogin}
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
					component={Registration}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		status: state.login.status
	}
}

const mapDispatchToProps = dispatch => {
	return {
		successLogin: (username, password) => {
			return dispatch(requestLogin(username, password));
		}
	}
}

Authentication = connect(mapStateToProps, mapDispatchToProps)(Authentication);

export default Authentication;