import React from 'react';
import './Male.scss';
import Sidebar from './Sidebar';
import Content from './Content';

const Male = () => {
	return(
		<div className="Male">
			<Sidebar
				jeans='Jeans'
				shirts='T-Shirts'
				official='Suits'
				bags='Bags'
				accessories='Accessories'
			/>
			<Content/>
		</div>
	);
}

export default Male;