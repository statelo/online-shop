import React from 'react';
import './Female.scss';
import Sidebar from './Sidebar';
import Content from './Content';

class Female extends React.Component {
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
			women_bags, 
			women_jeans, 
			women_shirts, 
			women_accessories, 
			dresses
		} = this.props;

		return(
			<div className="female">
				<Sidebar
					jeans='Jeans'
					shirts='T-Shirts'
					official='Dresses'
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
					bags={women_bags}
					official={dresses}
					jeans={women_jeans}
					shirts={women_shirts}
					accessories={women_accessories}
					handleChange={this.handleChange}
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

export default Female;