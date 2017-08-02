import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';

class Registration extends Component {
	render() {
		const inputBoxes = (
			<form action="/login" method="post">
				<div className="input-box">
					<label>Enter your E-Mail</label>
					<input
						className="email"
						type="text"
						name="username"
					/>
				</div>

				<div className="input-box">
					<label>Enter your password</label>
					<input
						className="password"
						type="password"
						name="password"
					/>
				</div>

				<div className="authenticate">
					<input type="submit" className="btn btn-primary" value="SIGN UP"/>
				</div>
			</form>
		)

		const socialButtons = (
			<div className="social-button">
				<h3>SIGN UP WITH SOCIAL NETWORK</h3>
				<button type="button" className="btn btn-primary facebook"><i className="fa fa-facebook-official"></i> Facebook</button>
				<button type="button" className="btn btn-primary linkedin"><i className="fa fa-linkedin"></i> Linkedin</button>
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

		return(
			<div className="authentication">
				<div className="header">
					<Link to="/" className="home-link"><h1>iProduction</h1></Link>
				</div>

				{registerView}
			</div>
		)
	}
}

export default Registration;