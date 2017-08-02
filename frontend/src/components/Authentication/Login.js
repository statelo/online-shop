import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

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
					<label>Enter your E-Mail</label>
					<input
						className="email"
						type="text"
						name="username"
						value={this.state.username}
						onChange={this.handleChange}
					/>
				</div>

				<div className="input-box">
					<label>Enter your password</label>
					<input
						className="password"
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
				<button type="button" className="btn btn-primary facebook"><i className="fa fa-facebook-official"></i> Facebook</button>
				<button type="button" className="btn btn-primary linkedin"><i className="fa fa-linkedin"></i> Linkedin</button>
				<button type="button" className="btn btn-primary twitter"><i className="fa fa-twitter"></i> Twitter</button>
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

		return(
			<div className="authentication">
				<div className="header">
					<Link to="/" className="home-link"><h1>iProduction</h1></Link>
				</div>

				{loginView}
			</div>
		)
	}
}

export default Login;