import React from 'react';
import './Sidebar.scss';

const Sidebar = (props) => {
	return(
		<div className="Sidebar col-sm-2">
			<div className="Sidebar-search">
				<input
					type="text"
					name="product_name"
					placeholder="Search..."
					className="form-control"
					value={props.product_name}
					onChange={props.handleSearch}
				/>
			</div>
			<div className="Sidebar-products">
				<h3>PRODUCTS</h3>
				<hr/>
				<label>
					<input 
						type="checkbox" 
						checked={props.jeansVisibility}
						name="jeans"
						onChange={props.handleFilter}
					/>
					{' '}
					{props.jeans}
				</label>
				<label>
					<input 
						type="checkbox" 
						checked={props.shirtsVisibility} 
						name="shirts"
						onChange={props.handleFilter}
					/>
					{' '}
					{props.shirts}
				</label>
				<label>
					<input 
						type="checkbox" 
						checked={props.officialVisibility} 
						name="official"
						onChange={props.handleFilter}
					/>
					{' '}
					{props.official}
				</label>
				<label>
					<input 
						type="checkbox" 
						checked={props.bagsVisibility} 
						name="bags"
						onChange={props.handleFilter}
					/>
					{' '}
					{props.bags}
				</label>
				<label>
					<input 
						type="checkbox" 
						checked={props.accessoriesVisibility} 
						name="accessories"
						onChange={props.handleFilter}
					/>
					{' '}
					{props.accessories}
				</label>
			</div>
			<div className="Sidebar-sizes">
				<h3>SIZES</h3>
				<hr/>
				<label>
					<input 
						type="checkbox" 
						name="xs"
					/>
					{' '} 
					XS
				</label>
				<label>
					<input 
						type="checkbox" 
						name="s"
					/>
					{' '} 
					S
				</label>
				<label>
					<input 
						type="checkbox" 
						name="m"
					/>
					{' '} 
					M
				</label>
				<label>
					<input 
						type="checkbox" 
						name="l"
					/>
					{' '} 
					L
				</label>
				<label>
					<input 
						type="checkbox" 
						name="xl"
					/>
					{' '} 
					XL
				</label>
				<label>
					<input 
						type="checkbox" 
						name="2xl"
					/>
					{' '} 
					2XL
				</label>
			</div>
			<div className="Sidebar-brands">
				<h3>BRANDS</h3>
				<hr/>
				<label>
					<input 
						type="checkbox" 
						name="armani"
					/>
					{' '} 
					Armani Jeans
				</label>
				<label>
					<input 
						type="checkbox" 
						name="levis"
					/>
					{' '} 
					Levi`s
				</label>
				<label>
					<input 
						type="checkbox" 
						name="nike"
					/>
					{' '} 
					Nike
				</label>
				<label>
					<input 
						type="checkbox" 
						name="adidas"
					/>
					{' '} 
					Adidas Original
				</label>
				<label>
					<input 
						type="checkbox" 
						name="asos"
					/>
					{' '} 
					ASOS
				</label>
				<label>
					<input 
						type="checkbox" 
						name="calvin_klein"
					/>
					{' '} 
					Calvin Klein
				</label>
				<label>
					<input 
						type="checkbox" 
						name="nicce_london"
					/>
					{' '} 
					Nicce London
				</label>
				<label>
					<input 
						type="checkbox" 
						name="reebok"
					/>
					{' '} 
					Reebok
				</label>
				<label>
					<input 
						type="checkbox" 
						name="bershka"
					/>
					{' '} 
					Bershka
				</label>
				<label>
					<input 
						type="checkbox" 
						name="boohoo"
					/>
					{' '} 
					Boohoo
				</label>
				<label>
					<input 
						type="checkbox" 
						name="moschino"
					/>
					{' '} 
					Love Moschino
				</label>
				<label>
					<input 
						type="checkbox" 
						name="mango"
					/>
					{' '} 
					Mango
				</label>
				<label>
					<input 
						type="checkbox" 
						name="tommy_hilfiger"
					/>
					{' '} 
					Tommy Hilfiger
				</label>
				<label>
					<input 
						type="checkbox" 
						name="chi_chi_london"
					/>
					{' '} 
					Chi Chi London
				</label>
			</div>
		</div>
	);
}

export default Sidebar;