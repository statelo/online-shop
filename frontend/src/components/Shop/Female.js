import React from 'react';
import './Female.scss';
import Sidebar from './Sidebar';
import Content from './Content';

const Female = () => {
	return(
		<div className="female">
			<Sidebar
				jeans='Jeans'
				shirts='T-Shirts'
				official='Dresses'
				bags='Bags'
				accessories='Accessories'
			/>
			<Content/>
		</div>
	);
}

export default Female;