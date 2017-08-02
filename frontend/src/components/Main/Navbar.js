import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
	render() {
 		const logoutLink = (
 			<ul className="nav navbar-nav navbar-right">
	      <li><Link to="/" onClick={this.props.handleLogout}><span className="glyphicon glyphicon-log-in"></span> LOGOUT</Link></li>
	    </ul>
 		)

 		const loginLink = (
 			<ul className="nav navbar-nav navbar-right">
	      <li><Link to="/auth/login"><span className="glyphicon glyphicon-log-in"></span> LOGIN</Link></li>
	    </ul>
 		)

		return(
			<div>
				<nav className="navbar navbar-inverse">
				  <div className="container">
				    <div className="navbar-header">
				      <Link className="navbar-brand" to="/">iProduction</Link>
				    </div>
				    <ul className="nav navbar-nav">
				      <li><Link to="/blog">Blog</Link></li>
				    </ul>
				    
				    {this.props.isLoggedIn ? logoutLink : loginLink}
				  </div>
				</nav>
			</div>
		);
	}
}

export default Navbar;