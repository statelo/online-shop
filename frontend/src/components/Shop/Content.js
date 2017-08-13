import React from 'react';
import './Content.scss';
import Product from './Product';
import { Link } from 'react-router-dom';

const Content = (props) => {
	const { bags, official, jeans, shirts, accessories } = props;

	const renderOne = (product) => {
		return product.map((item) => (
			<Product
				image={item.image_src}
				key={item.id}
				name={item.name}
				price={item.price}
			/>
		))
	}

	const renderAll = () => {
		return(
			<div>
				{official.map((item) => (
					<Product
						image={item.image_src}
						key={item.id}
						name={item.name}
						price={item.price}
					/>
				))}
				{bags.map((item) => (
					<Product
						image={item.image_src}
						key={item.id}
						name={item.name}
						price={item.price}
					/>
				))}
				{jeans.map((item) => (
					<Product
						image={item.image_src}
						key={item.id}
						name={item.name}
						price={item.price}
					/>
				))}
				{shirts.map((item) => (
					<Product
						image={item.image_src}
						key={item.id}
						name={item.name}
						price={item.price}
					/>
				))}
				{accessories.map((item) => (
					<Product
						image={item.image_src}
						key={item.id}
						name={item.name}
						price={item.price}
					/>
				))}
			</div>
		)
	}

	return(
		<div className="Content col-sm-10">
			<h1 className="Content-home"><Link to="/" className="Content-link">ONLINE SHOP</Link></h1>
			{props.officialVisibility || props.accessoriesVisibility || props.jeansVisibility || props.bagsVisibility || props.shirtsVisibility ? null : renderAll()}
			{props.officialVisibility ? renderOne(official) : null}
			{props.accessoriesVisibility ? renderOne(accessories) : null}
			{props.jeansVisibility ? renderOne(jeans) : null}
			{props.bagsVisibility ? renderOne(bags) : null}
			{props.shirtsVisibility ? renderOne(shirts) : null}
		</div>
	);
}

export default Content;