import React from 'react';
import { Gender } from '../components';

class Shop extends React.Component {
	render() {
		return(
			<div>
				<Gender
					props={this.props}
				/>
			</div>
		);
	}
}

export default Shop;