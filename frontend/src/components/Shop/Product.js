import React from 'react';
import './Product.scss';

const Product = (props) => {
	return(
		<div className="Product">
			<img src={props.image} alt="item"/>
			<div className="Product-description">
				<p>{props.name}</p>
				<p>{props.price}</p>
			</div>
		</div>
	)
}

export default Product;