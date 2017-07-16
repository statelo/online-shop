import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
	render() {
		return(
			<div className="header">
      	<nav className="navbar navbar-inverse">
				  <div className="container">
				    <div className="navbar-header">
				      <Link className="navbar-brand" to="/">iProduction</Link>
				    </div>
				    <ul className="nav navbar-nav">
				      <li><Link to="/">Home</Link></li>
				    </ul>
				    <ul className="nav navbar-nav navbar-right">
				      <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li></ul>
				  </div>
				</nav>
			</div>
		)
	}
}

export default Home;