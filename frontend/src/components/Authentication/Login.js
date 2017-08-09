import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.onLogin = this.onLogin.bind(this);
	}

	handleChange(e) {
		let nextState = {};
		nextState[e.target.name] = e.target.value;
		this.setState(nextState);
	}

	onLogin() {
		let id = this.state.username;
    let pwd = this.state.password;

		this.props.successLogin(id, pwd)
	}

	render() {
		const inputBoxes = (
			<div>
				<div className="input-box">
					<label>EMAIL:</label>
					<input
						type="text"
						name="username"
						value={this.state.username}
						onChange={this.handleChange}
					/>
				</div>

				<div className="input-box">
					<label>PASSWORD:</label>
					<input
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
				</div>

				<div className="authenticate">
					<a className="btn btn-primary" onClick={this.onLogin}>LOGIN</a>
				</div>
			</div>
		)

		const socialButtons = (
			<div className="social-button">
				<h3>LOGIN WITH SOCIAL NETWORK</h3>
				<a href="/auth/login/facebook" className="btn btn-primary facebook"><i className="fa fa-facebook-official"></i> Facebook</a>
				<a href="/auth/login/google" className="btn btn-primary google"><i className="fa fa-google"></i> Google</a>
				<a href="/auth/login/twitter" className="btn btn-primary twitter"><i className="fa fa-twitter"></i> Twitter</a>
			</div>
		)

		const loginView = (
			<div className="main">
				<h3>LOGIN WITH EMAIL</h3>

				{inputBoxes}

				<div className="false-login">
					New Here? <Link to="/auth/signup" className="signup-link">Create New Account</Link>
				</div>

				<div className="social">
					<hr/>
					<div>OR</div>
				</div>

				{socialButtons}
			</div>
		)

		const failureAlert = (
      <div className="what">
        <strong>INVALID USERNAME OR PASSWORD</strong>
      </div>
    )

		return(
			<div className="Login-authentication">
				{this.props.login_status === "FAILURE" && failureAlert}
				<div className="header">
					<a href="/" className="home-link"><h1>iProduction</h1></a>
				</div>

				{loginView}
			</div>
		)
	}
}

export default Login;