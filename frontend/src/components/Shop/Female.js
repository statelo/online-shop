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
			accessories: false,
			product_name: ''
		}

		this.handleFilter = this.handleFilter.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleFilter(e) {
		this.setState({
			[e.target.name]: !this.state[e.target.name]
		})
	}

	handleSearch(e) {
		this.setState({
			[e.target.name]: e.target.value
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
					handleFilter={this.handleFilter}
					handleSearch={this.handleSearch}
					jeansVisibility={this.state.jeans}
					shirtsVisibility={this.state.shirts}
					officialVisibility={this.state.official}
					bagsVisibility={this.state.bags}
					accessoriesVisibility={this.state.accessories}
					product_name={this.state.product_name}
				/>
				<Content
					bags={women_bags}
					official={dresses}
					jeans={women_jeans}
					shirts={women_shirts}
					accessories={women_accessories}
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