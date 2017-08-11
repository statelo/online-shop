import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

class Navbar extends React.Component {
	componentDidMount() {
		const { user } = this.props;

		if(user) {
			return
		} else {
			this.props.socialLogin()
		}
	}

	render() {
		const shopButton = (
			<Link to="/shop" className="Navbar-link">
      	<div className="Navbar-button">SHOP</div>
      </Link>
		);

 		const logoutLink = (
	    <div className="Navbar-authentication">
	 			<Link to="/" className="Navbar-link" onClick={this.props.handleLogout}>
	      	<div className="Navbar-button">LOGOUT</div>
	      </Link>
	      {this.props.isLoggedIn ? shopButton : null}
 				<span className="Navbar-greetings">{`Welcome, ${this.props.user}`}</span>
 			</div>
 		);

 		const loginLink = (
 			<div className="Navbar-authentication">
	 			<Link to="/auth/login" className="Navbar-link">
	      	<div className="Navbar-button">LOGIN</div>
	      </Link>
 				<span className="Navbar-greetings">Please Login</span>
 			</div>
 		);

		return(
			<div className="Navbar">
				<Link to='/' className="Navbar-logo">ONLINE SHOP</Link>
				{this.props.isLoggedIn ? logoutLink : loginLink}
			</div>
		);
	}
}

export default Navbar;