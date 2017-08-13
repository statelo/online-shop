import React from 'react';
import './Male.scss';
import Sidebar from './Sidebar';
import Content from './Content';

class Male extends React.Component {
	constructor(props) { 
		super(props);
		this.state = {
			jeans: false,
			shirts: false,
			official: false,
			bags: false,
			accessories: false
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: !this.state[e.target.name]
		})
	}

	render() {
		const { 
			men_bags, 
			men_jeans, 
			men_shirts, 
			men_accessories, 
			suits  
		} = this.props;

		return(
			<div className="Male">
				<Sidebar
					jeans='Jeans'
					shirts='T-Shirts'
					official='Suits'
					bags='Bags'
					accessories='Accessories'
					handleChange={this.handleChange}
					jeansVisibility={this.state.jeans}
					shirtsVisibility={this.state.shirts}
					officialVisibility={this.state.official}
					bagsVisibility={this.state.bags}
					accessoriesVisibility={this.state.accessories}
				/>
				<Content
					bags={men_bags}
					official={suits}
					jeans={men_jeans}
					shirts={men_shirts}
					accessories={men_accessories}
					jeansVisibility={this.state.jeans}
					shirtsVisibility={this.state.shirts}
					officialVisibility={this.state.official}
					bagsVisibility={this.state.bags}
					accessoriesVisibility={this.state.accessories}
				/>
			</div>
		);
	}
}

export default Male;