import React from 'react';
import './Gender.scss';
import { Link, Route, Switch } from 'react-router-dom';
import Male from './Male';
import Female from './Female';

const Gender = (props) => {
	const genderSelector = (
		<div className="Gender-menu">
			<Link to={`${props.match.url}/male`}><div className="Gender-male col-sm-6">Male</div></Link>
			<Link to={`${props.match.url}/female`}><div className="Gender-female col-sm-6">Female</div></Link>
		</div>
	);

	const MaleComponent = () => {
		return(
			<Male
				men_bags={props.men_bags}
				men_jeans={props.men_jeans}
				men_shirts={props.men_shirts}
				men_accessories={props.men_accessories}
				suits={props.suits}
			/>
		);
	}

	const FemaleComponent = () => {
		return(
			<Female
				women_bags={props.women_bags}
				women_jeans={props.women_jeans}
				women_shirts={props.women_shirts}
				women_accessories={props.women_accessories}
				dresses={props.dresses}
			/>
		);
	}

	return(
		<div className="Gender">
			{props.match.isExact ? genderSelector : null}

			<Switch>
				<Route path={`${props.match.url}/male`} component={MaleComponent} />
				<Route path={`${props.match.url}/female`} component={FemaleComponent}/>
			</Switch>
		</div>
	)
}

export default Gender;