import React, { Component } from 'react';
import './Registration.scss';

class Registration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			password_repeat: '',
			first_name: '',
			last_name: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.onSignup = this.onSignup.bind(this);
	}

	onSignup() {
		let username = this.state.username;
		let password = this.state.password;
		let password_repeat = this.state.password_repeat;
		let first_name = this.state.first_name;
		let last_name = this.state.last_name;

		this.props.successSignup(username, password, password_repeat, first_name, last_name);
	}

	handleChange(e) {
		let nextState = {};
		nextState[e.target.name] = e.target.value;
		this.setState(nextState);
	}

	render() {
		const inputBoxes = (
			<div>
				<div className="input-box">
					<label>FIRST NAME:</label>
					<input
						type="text"
						name="first_name"
						value={this.state.first_name}
						onChange={this.handleChange}
						className="form-control"
					/>
				</div>

				<div className="input-box">
					<label>LAST NAME:</label>
					<input
						type="text"
						name="last_name"
						value={this.state.last_name}
						onChange={this.handleChange}
						className="form-control"
					/>
				</div>

				<div className="input-box">
					<label>EMAIL:</label>
					<input
						type="text"
						name="username"
						value={this.state.username}
						onChange={this.handleChange}
						className="form-control"
					/>
				</div>

				<div className="input-box">
					<label>PASSWORD:</label>
					<input
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
						className="form-control"
					/>
				</div>

				<div className="input-box">
					<label>REPEAT PASSWORD:</label>
					<input
						type="password"
						name="password_repeat"
						value={this.state.password_repeat}
						onChange={this.handleChange}
						className="form-control"
					/>
				</div>

				<div className="authenticate">
					<a className="btn btn-primary" onClick={this.onSignup}>SIGN UP</a>
				</div>
			</div>
		)

		const socialButtons = (
			<div className="social-button">
				<h3>SIGN UP WITH SOCIAL NETWORK</h3>
				<button type="button" className="btn btn-primary facebook"><i className="fa fa-facebook-official"></i> Facebook</button>
				<button type="button" className="btn btn-primary google"><i className="fa fa-google"></i> Google</button>
				<button type="button" className="btn btn-primary twitter"><i className="fa fa-twitter"></i> Twitter</button>
			</div>
		)

		const registerView = (
			<div className="main">
				<h3>SIGN UP WITH EMAIL</h3>

				{inputBoxes}

				<div className="social">
					<hr/>
					<div>OR</div>
				</div>

				{socialButtons}
			</div>
		)

    const failureAlert = (
      <div className="what">
        <strong>USER EXIST OR PASSWORDS DO NOT MATCH</strong>
      </div>
    )

		return(
			<div className="Registration-authentication">
				{this.props.signup_status === "FAILURE" && failureAlert}
				<div className="header">
					<a href="/" className="home-link"><h1>ONLINE SHOP</h1></a>
				</div>

				{registerView}
			</div>
		)
	}
}

export default Registration;