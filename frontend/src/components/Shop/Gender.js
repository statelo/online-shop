import React from 'react';
import './Gender.scss';
import { Link, Route, Switch } from 'react-router-dom';
import Male from './Male';
import Female from './Female';

const Gender = ({ props }) => {
	const genderSelector = (
		<div className="Gender-menu">
			<Link to={`${props.match.url}/male`}><div className="Gender-male col-sm-6">Male</div></Link>
			<Link to={`${props.match.url}/female`}><div className="Gender-female col-sm-6">Female</div></Link>
		</div>
	);

	return(
		<div className="Gender">
			{props.match.isExact ? genderSelector : null}

			<Switch>
				<Route path={`${props.match.url}/male`} component={Male}/>
				<Route path={`${props.match.url}/female`} component={Female}/>
			</Switch>
		</div>
	)
}

export default Gender;