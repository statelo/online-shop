import React from 'react';
import './Product.scss';
import item from '../../images/item.jpg';

const Product = (props) => {
	return(
		<div className="Product">
			<img src={item} alt="item"/>
			<div className="Product-description">
				<p>{props.name}</p>
				<p>{`Price: ${props.price}`}</p>
			</div>
		</div>
	)
}

export default Product;