import React from 'react';
import './Sidebar.scss';

const Sidebar = ( props ) => {
	return(
		<div className="Sidebar col-sm-2">
			<div className="Sidebar-checkbox">
				<h3>PRODUCTS</h3>
				<hr/>
				<label><input type="checkbox" name="jeans"/> {props.jeans}</label>
				<label><input type="checkbox" name="shirts"/> {props.shirts}</label>
				<label><input type="checkbox" name="official"/> {props.official}</label>
				<label><input type="checkbox" name="bags"/> {props.bags}</label>
				<label><input type="checkbox" name="accessories"/> {props.accessories}</label>
			</div>
			<div className="Sidebar-checkbox">
				<h3>SIZES</h3>
				<hr/>
				<label><input type="checkbox" name="xs"/> XS</label>
				<label><input type="checkbox" name="s"/> S</label>
				<label><input type="checkbox" name="m"/> M</label>
				<label><input type="checkbox" name="l"/> L</label>
				<label><input type="checkbox" name="xl"/> XL</label>
				<label><input type="checkbox" name="2xl"/> 2XL</label>
			</div>
		</div>
	);
}

export default Sidebar;