import React from 'react';
import { Gender } from '../components';

class Shop extends React.Component {
	render() {
		return(
			<div>
				<Gender
					{...this.props}
					women_bags={women_bags}
					women_jeans={women_jeans}
					women_shirts={women_shirts}
					women_accessories={women_accessories}
					men_bags={men_bags}
					men_jeans={men_jeans}
					men_shirts={men_shirts}
					men_accessories={men_accessories}
					dresses={dresses}
					suits={suits}
				/>
			</div>
		);
	}
}

const women_accessories = [
	{
		id: 1,
    name : "South Beach Visor with Clear Perspex Peak",
    price : "$15.79",
    image_src : "https://images.asos-media.com/products/south-beach-visor-with-clear-perspex-peak/8312147-1-cream?$XL$"
	},
	{
		id: 2,
    name : "ASOS BRIDAL Mini Flower Back Hair Garland",
    price : "$12.63",
    image_src : "https://images.asos-media.com/products/asos-bridal-mini-flower-back-hair-garland/8096261-1-white?$XL$"
	},
	{
		id: 3,
    name : "French Connection Windowpane Check Scarf",
    price : "$71.06",
    image_src : "https://images.asos-media.com/products/french-connection-windowpane-check-scarf/8589748-1-creamblack?$XL$"
	},
	{
		id: 4,
    name : "Polo Ralph Lauren Cap in White",
    price : "$45.79",
    image_src : "https://images.asos-media.com/products/polo-ralph-lauren-cap-in-white/8295116-1-white?$XL$"
	},
	{
		id: 5,
    name : "French Connection Colour Block Laptop Case",
    price : "$102.64",
    image_src : "https://images.asos-media.com/products/french-connection-colour-block-laptop-case/8589577-1-silvergreen?$XL$"
	},
	{
		id: 6,
    name : "Pieces Curved Buckle Waist And Hip Belt",
    price : "$11.05",
    image_src : "https://images.asos-media.com/products/pieces-curved-buckle-waist-and-hip-belt/7582807-1-black?$XL$"
	},
	{
		id: 7,
    name : "ASOS Oversize Rose Gold Snap Hair Clip",
    price : "$6.32",
    image_src : "https://images.asos-media.com/products/asos-oversize-rose-gold-snap-hair-clip/7957938-1-rosegold?$XL$"
	},
	{
		id: 8,
    name : "Johnny Loves Rosie Metal Cluster Hair Clip",
    price : "$18.95",
    image_src : "https://images.asos-media.com/products/johnny-loves-rosie-metal-cluster-hair-clip/7966204-1-gold?$XL$"
	},
	{
		id: 9,
    name : "ASOS Ring Felt Panama Hat",
    price : "$34.74",
    image_src : "https://images.asos-media.com/products/asos-ring-felt-panama-hat/8074583-1-black?$XL$"
	},
	{
		id: 10,
    name : "ASOS Oversized Long Knit Scarf",
    price : "$23.69",
    image_src : "https://images.asos-media.com/products/asos-oversized-long-knit-scarf/7911756-1-black?$XL$"
	}
]

const men_accessories = [
	{
		id: 1,
    name : "Matt & Nat Rubben Bifold Wallet",
    price : "$71.06",
    image_src : "https://images.asos-media.com/products/matt-nat-rubben-bifold-wallet/8214586-1-black?$XL$"
	},
	{
		id: 2,
    name : "Polo Ralph Lauren Leather Belt in Brown",
    price : "$93.17",
    image_src : "https://images.asos-media.com/products/polo-ralph-lauren-leather-belt-in-brown/8209130-1-brown?$XL$"
	},
	{
		id: 3,
    name : "Noak Tie In Mini Herringbone",
    price : "$22.11",
    image_src : "https://images.asos-media.com/products/noak-tie-in-mini-herringbone/8405398-1-blue?$XL$"
	},
	{
		id: 4,
    name : "ASOS Knitted Blanket Scarf In Taupe",
    price : "$25.27",
    image_src : "https://images.asos-media.com/products/asos-knitted-blanket-scarf-in-taupe/8000245-1-taupe?$XL$"
	},
	{
		id: 5,
    name : "Nike Training Hyperfuel Water Bottle 680 ML",
    price : "$18.95",
    image_src : "https://images.asos-media.com/products/nike-training-hyperfuel-water-bottle-680-ml-in-black-oba624-018a/8407511-1-black?$XL$"
	},
	{
		id: 6,
    name : "Nike Training Swoosh Headband In Black",
    price : "$7.90",
    image_src : "https://images.asos-media.com/products/nike-training-swoosh-headband-in-black-nn07010/7989320-1-black?$XL$"
	},
	{
		id: 7,
    name : "Nike Training Core Lock Gloves In Grey",
    price : "$26.84",
    image_src : "https://images.asos-media.com/products/nike-training-core-lock-gloves-in-grey-lg38-032/8407301-1-grey?$XL$"
	},
	{
		id: 8,
    name : "Fresh & Rebel Powerbank In Grey",
    price : "$31.57",
    image_src : "https://images.asos-media.com/products/fresh-rebel-powerbank-in-grey/7113027-1-grey?$XL$"
	},
	{
		id: 9,
    name : "ASOS Black Leather Passport Cover In Gift Box",
    price : "$18.95",
    image_src : "https://images.asos-media.com/products/asos-black-leather-passport-cover-in-gift-box/7128061-1-black?$XL$"
	},
	{
		id: 10,
    name : "Selected Homme Knitted Pocket Square",
    price : "$18.95",
    image_src : "https://images.asos-media.com/products/selected-homme-knitted-pocket-square/7993793-1-greymelange?$XL$"
	}
]

const men_shirts = [
	{
		id: 1,
    name : "Adidas Originals California T-Shirt In Red",
    price : "$36.32",
    image_src : "https://images.asos-media.com/products/adidas-originals-california-t-shirt-in-red-br7005/8363034-1-red?$XL$"
	},
	{
		id: 2,
    name : "Armani Jeans Crew Neck AJ Logo T-Shirt Navy",
    price : "$78.96",
    image_src : "https://images.asos-media.com/products/armani-jeans-crew-neck-aj-logo-t-shirt-navy/7927525-1-navy?$XL$"
	},
	{
		id: 3,
    name : "Levi's T-Shirt Batwing Logo",
    price : "$39.48",
    image_src : "https://images.asos-media.com/products/levis-t-shirt-batwing-logo/5373144-1-white?$XL$"
	},
	{
		id: 4,
    name : "Nike Ace-Logo Vest In White",
    price : "$31.58",
    image_src : "https://images.asos-media.com/products/nike-ace-logo-vest-in-white-779234-100/6429897-1-white?$XL$"
	},
	{
		id: 5,
    name : "Calvin Klein T-Shirt With Logo",
    price : "$55.27",
    image_src : "https://images.asos-media.com/products/calvin-klein-t-shirt-with-logo/7870504-1-black?$XL$"
	},
	{
		id: 6,
    name : "Adidas Originals Trefoil T-Shirt In Pink",
    price : "$36.32",
    image_src : "https://images.asos-media.com/products/adidas-originals-trefoil-t-shirt-in-pink-bq1814/8362816-1-pink?$XL$"
	},
	{
		id: 7,
    name : "Nicce London Logo T-Shirt In White",
    price : "$44.21",
    image_src : "https://images.asos-media.com/products/nicce-london-logo-t-shirt-in-white/7839868-1-white?$XL$"
	},
	{
		id: 8,
    name : "Reebok Iconic T-Shirt In Black",
    price : "$36.32",
    image_src : "https://images.asos-media.com/products/reebok-iconic-t-shirt-in-black-bq2630/8581949-1-black?$XL$"
	},
	{
		id: 9,
    name : "Adidas Originals Camo Trefoil T-Shirt In Green",
    price : "$36.32",
    image_src : "https://images.asos-media.com/products/adidas-originals-camo-trefoil-t-shirt-in-green-bq1871/8363020-1-green?$XL$"
	},
	{
		id: 10,
    name : "Hollister Crew T-Shirt Baseball Tech Logo Slim Fit",
    price : "$30.00",
    image_src : "https://images.asos-media.com/products/hollister-crew-t-shirt-baseball-tech-logo-slim-fit-in-grey-black/8435006-1-greyblack?$XL$"
	}
]

const women_shirts = [
	{
		id: 1,
    name : "Levi's Perfect T-shirt with Batwing Logo",
    price : "$31.58",
    image_src : "https://images.asos-media.com/products/levis-perfect-t-shirt-with-batwing-logo/6721328-1-white?$XL$"
	},
	{
		id: 2,
    name : "River Island Basic Jersey Scoop Back Vest",
    price : "$9.47",
    image_src : "https://images.asos-media.com/products/river-island-basic-jersey-scoop-back-vest/7966838-1-white?$XL$"
	},
	{
		id: 3,
    name : "River Island Round Neck Jersey T-Shirt",
    price : "$15.79",
    image_src : "https://images.asos-media.com/products/river-island-round-neck-jersey-t-shirt/8076536-1-white?$XL$"
	},
	{
		id: 4,
    name : "Nike Pro Training Tank Top In Black",
    price : "$34.74",
    image_src : "https://images.asos-media.com/products/nike-pro-training-tank-top-in-black/7407074-1-black?$XL$"
	},
	{
		id: 5,
    name : "Calvin Klein Logo T-Shirt",
    price : "$71.06",
    image_src : "https://images.asos-media.com/products/calvin-klein-logo-t-shirt/6792458-1-lightgreyheather?$XL$"
	},
	{
		id: 6,
    name : "Boohoo Vest Top",
    price : "$6.32",
    image_src : "https://images.asos-media.com/products/boohoo-vest-top/8258112-1-grey?$XL$"
	},
	{
		id: 7,
    name : "ASOS Top With Bardot V Neck in Rib",
    price : "$22.11",
    image_src : "https://images.asos-media.com/products/asos-top-with-bardot-v-neck-in-rib/8168376-1-stone?$XL$"
	},
	{
		id: 8,
    name : "Calvin Klein Logo T-Shirt",
    price : "$71.06",
    image_src : "https://images.asos-media.com/products/calvin-klein-logo-t-shirt/6792658-1-meteorite?$XL$"
	},
	{
		id: 9,
    name : "Nike Running Dry Miler V-Neck Top",
    price : "$39.48",
    image_src : "https://images.asos-media.com/products/nike-running-dry-miler-v-neck-top/7407461-1-black?$XL$"
	},
	{
		id: 10,
    name : "ASOS Vest with Square Neck",
    price : "$12.63",
    image_src : "https://images.asos-media.com/products/asos-vest-with-square-neck/8245754-1-lightgrey?$XL$"
	}
]

const men_jeans = [
	{
		id: 1,
    name : "Cheap Monday Tight Jeans Skinny Fit",
    price : "$77.38",
    image_src : "https://images.asos-media.com/products/cheap-monday-tight-jeans-skinny-fit-in-stonewash-blue/3905581-1-blue?$XL$"
	},
	{
		id: 2,
    name : "River Island Skinny Fit Jeans In Mid Wash Blue",
    price : "$55.27",
    image_src : "https://images.asos-media.com/products/river-island-skinny-fit-jeans-in-mid-wash-blue/6135702-1-blue?$XL$"
	},
	{
		id: 3,
    name : "Jack & Jones Intelligence Skinny Jeans in Washed Grey",
    price : "$63.16",
    image_src : "https://images.asos-media.com/products/jack-jones-intelligence-skinny-jeans-in-washed-grey/6737346-1-washedgrey?$XL$"
	},
	{
		id: 4,
    name : "ASOS Super Spray On Jeans In Light Blue",
    price : "$31.58",
    image_src : "https://images.asos-media.com/products/asos-super-spray-on-jeans-in-light-blue/7685716-1-lightblue?$XL$"
	},
	{
		id: 5,
    name : "ASOS Super Skinny Jeans In White",
    price : "$39.48",
    image_src : "https://images.asos-media.com/products/asos-super-skinny-jeans-in-white/8005338-1-white?$XL$"
	},
	{
		id: 6,
    name : "New Look Skinny Jeans In Light Wash Blue",
    price : "$39.46",
    image_src : "https://images.asos-media.com/products/new-look-skinny-jeans-in-light-wash-blue/8178540-1-midblue?$XL$"
	},
	{
		id: 7,
    name : "ASOS Skinny Jeans In Dark Wash",
    price : "$44.21",
    image_src : "https://images.asos-media.com/products/asos-skinny-jeans-in-dark-wash/3422133-1-blue?$XL$"
	},
	{
		id: 8,
    name : "Selected Homme Jeans In Skinny Fit Stretch Denim",
    price : "$78.96",
    image_src : "https://images.asos-media.com/products/selected-homme-jeans-in-skinny-fit-stretch-denim/7413104-1-black?$XL$"
	},
	{
		id: 9,
    name : "Diesel Thommer Slim Taper Jeans 084GR",
    price : "$173.70",
    image_src : "https://images.asos-media.com/products/diesel-thommer-slim-taper-jeans-084gr/7959645-1-084gr?$XL$"
	},
	{
		id: 10,
    name : "Levis 501 Skinny Fit Jeans Saint Mark Wash",
    price : "$134.22",
    image_src : "https://images.asos-media.com/products/levis-501-skinny-fit-jeans-saint-mark-wash/8172232-1-saintmark?$XL$"
	}
]

const women_jeans = [
	{
		id: 1,
    name : "ASOS RIDLEY High Waist Skinny Jeans in Lily Wash",
    price : "$44.21",
    image_src : "https://images.asos-media.com/products/asos-ridley-high-waist-skinny-jeans-in-lily-wash/7947743-1-lilymidwash?$XL$"
	},
	{
		id: 2,
    name : "Hollister Distressed Crop Jean",
    price : "$69.48",
    image_src : "https://images.asos-media.com/products/hollister-distressed-crop-jean/8340266-1-lightwashdenim?$XL$"
	},
	{
		id: 3,
    name : "ASOS RIDLEY High Waist Skinny Jeans in Clean Black",
    price : "$39.48",
    image_src : "https://images.asos-media.com/products/asos-ridley-high-waist-skinny-jeans-in-clean-black/7753437-1-black?$XL$"
	},
	{
		id: 4,
    name : "ASOS Crop Flare Jeans in Mid Wash Blue",
    price : "$50.53",
    image_src : "https://images.asos-media.com/products/asos-crop-flare-jeans-in-mid-wash-blue-with-raw-hem/8250579-1-midwashblue?$XL$"
	},
	{
		id: 5,
    name : "ASOS RIDLEY High Waist Skinny Jeans",
    price : "$44.21",
    image_src : "https://images.asos-media.com/products/asos-ridley-high-waist-skinny-jeans-in-coyan-exreme-wash/7947310-1-coyanextremewash?$XL$"
	},
	{
		id: 6,
    name : "ASOS FARLEIGH High Waist Slim Mom Jeans",
    price : "$55.27",
    image_src : "https://images.asos-media.com/products/asos-farleigh-high-waist-slim-mom-jeans-in-prince-wash-with-busted-knees/6009486-1-lightwashblue?$XL$"
	},
	{
		id: 7,
    name : "ASOS LISBON Skinny Mid Rise Jeans",
    price : "$39.48",
    image_src : "https://images.asos-media.com/products/asos-lisbon-skinny-mid-rise-jeans-in-clean-black-in-ankle-grazer-length/7549574-1-black?$XL$"
	},
	{
		id: 8,
    name : "River Island Mom Jeans With Extreme Rips",
    price : "$66.32",
    image_src : "https://images.asos-media.com/products/river-island-mom-jeans-with-extreme-rips/7801776-1-mid?$XL$"
	},
	{
		id: 9,
    name : "New Look Skinny Ripped Knee Jeans",
    price : "$44.20",
    image_src : "https://images.asos-media.com/products/new-look-skinny-ripped-knee-jeans/8662717-1-blue?$XL$"
	},
	{
		id: 10,
    name : "ASOS 'Sculpt Me' High Rise Premium Jeans",
    price : "$55.27",
    image_src : "https://images.asos-media.com/products/asos-sculpt-me-high-rise-premium-jeans-in-brooklyn-washed-black/6350936-1-washedblack?$XL$"
	}
]

const suits = [
	{
		id: 1,
    name : "River Island Skinny Fit Suit In Grey Check Marl",
    price : "FROM $197.39",
    image_src : "https://images.asos-media.com/groups/river-island-skinny-fit-suit-in-grey-check-marl/16653-group-1?$XL$"
	},
	{
		id: 2,
    name : "Selected Homme Skinny Suit In Sand Texture",
    price : "FROM $292.13",
    image_src : "https://images.asos-media.com/groups/selected-homme-skinny-suit-in-sand-texture/16470-group-1?$XL$"
	},
	{
		id: 3,
    name : "Only & Sons Skinny Suit",
    price : "FROM $181.60",
    image_src : "https://images.asos-media.com/groups/only-sons-skinny-suit/16474-group-1?$XL$"
	},
	{
		id: 4,
    name : "ASOS Skinny Suit In Burgundy",
    price : "FROM $134.22",
    image_src : "https://images.asos-media.com/groups/asos-skinny-suit-in-burgundy/16341-group-1?$XL$"
	},
	{
		id: 5,
    name : "ASOS Super Skinny Fit Tuxedo In Navy",
    price : "FROM $157.91",
    image_src : "https://images.asos-media.com/groups/asos-super-skinny-fit-tuxedo-in-navy/12513-group-1?$XL$"
	},
	{
		id: 6,
    name : "Selected Homme Super Skinny Suit In Check",
    price : "FROM $300.03",
    image_src : "https://images.asos-media.com/groups/selected-homme-super-skinny-suit-in-check/15485-group-1?$XL$"
	},
	{
		id: 7,
    name : "Selected Homme Super Skinny Suit",
    price : "FROM $284.24",
    image_src : "https://images.asos-media.com/groups/selected-homme-super-skinny-suit/16464-group-1?$XL$"
	},
	{
		id: 8,
    name : "Selected Homme Wedding Skinny Suit in Greige",
    price : "FROM $284.24",
    image_src : "https://images.asos-media.com/groups/selected-homme-wedding-skinny-suit-in-greige/15416-group-1?$XL$"
	},
	{
		id: 9,
    name : "ASOS Slim Tuxedo in Black Satin Trim",
    price : "FROM $157.91",
    image_src : "https://images.asos-media.com/groups/asos-slim-tuxedo-in-black-satin-trim/14593-group-1?$XL$"
	},
	{
		id: 10,
    name : "ASOS Skinny Suit In Light Grey Texture",
    price : "FROM $157.91",
    image_src : "https://images.asos-media.com/groups/asos-skinny-suit-in-light-grey-texture/15454-group-1?$XL$"
	}
]

const dresses = [
	{
		id: 1,
    name : "Lost Ink Bodycon Dress In High Neck With Bralette",
    price : "$53.69",
    image_src : "https://images.asos-media.com/products/lost-ink-bodycon-dress-in-high-neck-with-bralette/8034132-1-grey?$XL$"
	},
	{
		id: 2,
    name : "ASOS Ultimate Double Split Front Maxi Dress",
    price : "$28.42",
    image_src : "https://images.asos-media.com/products/asos-ultimate-double-split-front-maxi-dress/8515742-1-black?$XL$"
	},
	{
		id: 3,
    name : "Boohoo V Neck Cami Midi Dress",
    price : "$12.63",
    image_src : "https://images.asos-media.com/products/boohoo-v-neck-cami-midi-dress/8295547-1-black?$XL$"
	},
	{
		id: 4,
    name : "Love Triangle V Neck Mini Dress In All Over Lace",
    price : "$66.32",
    image_src : "https://images.asos-media.com/products/love-triangle-v-neck-mini-dress-in-all-over-lace/5842353-1-black?$XL$"
	},
	{
		id: 5,
    name : "ASOS Beach Maxi Dress in Natural Fibre Stripe",
    price : "$44.21",
    image_src : "https://images.asos-media.com/products/asos-beach-maxi-dress-in-natural-fibre-stripe/8087290-1-stripe?$XL$"
	},
	{
		id: 6,
    name : "Boohoo Floral Flare Sleeve Skater Dress",
    price : "$34.74",
    image_src : "https://images.asos-media.com/products/boohoo-floral-flare-sleeve-skater-dress/8481304-1-ivory?$XL$"
	},
	{
		id: 7,
    name : "Club L Midi Dress with Cami Strap",
    price : "$23.69",
    image_src : "https://images.asos-media.com/products/club-l-midi-dress-with-cami-strap/5975279-1-black?$XL$"
	},
	{
		id: 8,
    name : "Pull&Bear Off Shoulder Dress",
    price : "$31.57",
    image_src : "https://images.asos-media.com/products/pullbear-off-shoulder-dress/8483798-1-red?$XL$"
	},
	{
		id: 9,
    name : "Chi Chi London Premium Lace Midi Dress",
    price : "$118.43",
    image_src : "https://images.asos-media.com/products/chi-chi-london-premium-lace-midi-dress-with-3-4-length-sleeve/8527270-1-navy?$XL$"
	},
	{
		id: 10,
    name : "ASOS Knitted Dress In Silk Blend",
    price : "$55.27",
    image_src : "https://images.asos-media.com/products/asos-knitted-dress-in-silk-blend/7667773-1-dirtyrose?$XL$"
	}
]

const men_bags = [
	{
		id: 1,
    name : "Adidas Originals Casual Class Backpack In Black",
    price : "$44.21",
    image_src : "https://images.asos-media.com/products/adidas-originals-casual-class-backpack-in-black-bk7119/7436069-1-black?$XL$"
	},
	{
		id: 2,
		name: "Armani Jeans All Over Logo Backpack in Black",
    price: "$252.66",
    image_src: "https://images.asos-media.com/products/armani-jeans-all-over-logo-backpack-in-black/7644560-1-black?$XL$"
	},
	{
		id: 3,
		name: "Calvin Klein Adam Backpack",
    price: "$268.45",
    image_src: "https://images.asos-media.com/products/calvin-klein-adam-backpack/8094854-1-black?$XL$"
	},
	{
		id: 4,
		name: "Dickies Valley Springs Messenger Bag",
    price: "$86.85",
    image_src: "https://images.asos-media.com/products/dickies-valley-springs-messenger-bag/8579633-1-brown?$XL$"
	},
	{
		id: 5,
		name: "Fossil Messenger Bag in Leather",
    price: "$393.20",
    image_src: "https://images.asos-media.com/products/fossil-messenger-bag-in-leather/8415046-1-brown?$XL$"
	},
	{
		id: 6,
		name: "Levi's Canvas Backpack In Black",
    price: "$78.96",
    image_src: "https://images.asos-media.com/products/levis-canvas-backpack-in-black/7324060-1-black?$XL$"
	},
	{
		id: 7,
		name: "Mi-Pac Canvas Tote Backpack In Black",
    price: "$47.37",
    image_src: "https://images.asos-media.com/products/mi-pac-canvas-tote-backpack-in-black/8154946-1-black?$XL$"
	},
	{
		id: 8,
		name: "New Balance Pelham Classic Backpack In Grey",
    price: "$39.48",
    image_src: "https://images.asos-media.com/products/new-balance-pelham-classic-backpack-in-grey/7593583-1-grey?$XL$"
	},
	{
		id: 9,
		name: "Nike Small Brasilia Holdall Bag In Blue",
    price: "$39.48",
    image_src: "https://images.asos-media.com/products/nike-small-brasilia-holdall-bag-in-blue-ba5335-410/7145463-1-blue?$XL$"
	},
	{
		id: 10,
		name: "Versace Jeans Backpack In Black With Large Logo",
    price: "$251.08",
    image_src: "https://images.asos-media.com/products/versace-jeans-backpack-in-black-with-large-logo/8412102-1-black?$XL$"
	}
]

const women_bags = [
	{
		id: 1,
		name: "Bershka Clean Minimal Backpack",
    price: "$31.57",
    image_src: "https://images.asos-media.com/products/bershka-clean-minimal-backpack/8562374-1-black?$XL$"
	},
	{
		id: 2,
		name: "Adidas Original Farm Print Travel Bag In Big Floral",
    price: "$63.16",
    image_src: "https://images.asos-media.com/products/adidas-originals-farm-print-travel-bag-in-big-floral/7570283-1-multicolour?$XL$"
	},
	{
		id: 3,
		name: "Nike Elemental Backpack With Logo Pocket Front",
    price: "$37.90",
    image_src: "https://images.asos-media.com/products/nike-elemental-backpack-with-logo-pocket-front/7782627-1-grey?$XL$"
	},
	{
		id: 4,
		name: "Mango Clean Faux Leather Back Pack",
    price: "$31.57",
    image_src: "https://images.asos-media.com/products/mango-clean-faux-leather-back-pack/8575412-1-black?$XL$"
	},
	{
		id: 5,
		name: "Tommy Hilfiger Reversible Tote",
    price: "$181.60",
    image_src: "https://images.asos-media.com/products/tommy-hilfiger-reversible-tote/8203117-1-navy?$XL$"
	},
	{
		id: 6,
		name: "Love Moschino Shoulder Bag with Chain Detailing",
    price: "$290.55",
    image_src: "https://images.asos-media.com/products/love-moschino-shoulder-bag-with-chain-detailing/8118122-1-black?$XL$"
	},
	{
		id: 7,
		name: "Ted Baker Chelsey Large Leather Shopper",
    price: "$252.66",
    image_src: "https://images.asos-media.com/products/ted-baker-chelsey-large-leather-shopper/8383335-1-grey?$XL$"
	},
	{
		id: 8,
		name: "ASOS Reversible Shopper Bag",
    price: "$31.58",
    image_src: "https://images.asos-media.com/products/asos-reversible-shopper-bag/8229555-1-black?$XL$"
	},
	{
		id: 9,
		name: "Whistles Jaspar Contrast Wristlet Clutch",
    price: "$108.96",
    image_src: "https://images.asos-media.com/products/whistles-jaspar-contrast-wristlet-clutch/8402280-1-navylime?$XL$"
	},
	{
		id: 10,
		name: "South Beach Pink Grapefruit Beach Bag",
    price: "$23.69",
    image_src: "https://images.asos-media.com/products/south-beach-pink-grapefruit-beach-bag/8068052-1-multi?$XL$"
	}
]

export default Shop;