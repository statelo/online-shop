import React from 'react';
import './Content.scss';
import Product from './Product';
import { Link } from 'react-router-dom';

const Content = () => {
	return(
		<div className="Content col-sm-10">
			<h1 className="Content-home"><Link to="/" className="Content-link">ONLINE SHOP</Link></h1>
			<Product
				name='Gucci'
				price='1000$'
			/>
			<Product
				name='Armani'
				price='1234$'
			/>
			<Product
				name='Louis Vuitton'
				price='699$'
			/>
			<Product
				name='Channel'
				price='1856$'
			/>
			<Product
				name='Levis'
				price='587$'
			/>
			<Product
				name='Kelvin Clain'
				price='1000$'
			/>
		</div>
	);
}

export default Content;