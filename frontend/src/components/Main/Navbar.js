import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import firstBackground from '../../images/background-1.jpg';
import secondBackground from '../../images/background-2.jpg';
import thirdBackground from '../../images/background-3.jpg';

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
 		const logoutLink = (
 			<ul className="nav navbar-nav navbar-right">
	      <li className="greetings">{`Hello, ${this.props.user}`}</li>
	      <li><Link to="/" onClick={this.props.handleLogout}><span className="glyphicon glyphicon-log-in"></span> LOGOUT</Link></li>
	    </ul>
 		)

 		const loginLink = (
 			<ul className="nav navbar-nav navbar-right">
 				<li className="greetings">Please Login</li>
	      <li><Link to="/auth/login"><span className="glyphicon glyphicon-log-in"></span> LOGIN</Link></li>
	    </ul>
 		)

		return(
			<div className="Navbar">
				<div id="myCarousel" className="carousel slide" data-ride="carousel">
					<nav className="navbar navbar-inverse">
					  <div className="container">
					    <div className="navbar-header">
					      <Link className="navbar-brand" to="/">SITE NAME</Link>
					    </div>
					    <ul className="nav navbar-nav">
					      <li></li>
					    </ul>
					    
					    {this.props.isLoggedIn ? logoutLink : loginLink}
					  </div>
					</nav>

			    <ol className="carousel-indicators">
			      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
			      <li data-target="#myCarousel" data-slide-to="1"></li>
			      <li data-target="#myCarousel" data-slide-to="2"></li>
			    </ol>

			    <div className="carousel-inner">
			      <div className="item active">
			        <img src={firstBackground} alt="first" style={{width: '100%', height: '100vh'}}/>
			      </div>

			      <div className="item">
			        <img src={secondBackground} alt="second" style={{width: '100%', height: '100vh'}}/>
			      </div>
			    
			      <div className="item">
			        <img src={thirdBackground} alt="third" style={{width: '100%', height: '100vh'}}/>
			      </div>
			    </div>

			    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
			      <span className="glyphicon glyphicon-chevron-left"></span>
			      <span className="sr-only">Previous</span>
			    </a>
			    <a className="right carousel-control" href="#myCarousel" data-slide="next">
			      <span className="glyphicon glyphicon-chevron-right"></span>
			      <span className="sr-only">Next</span>
			    </a>
			  </div>
			</div>
		);
	}
}

export default Navbar;