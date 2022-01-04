import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// Using set to eliminate duplicates
const allCatagories = ['all', ...new Set(items.map((item) => item.category))];
// console.log(allCatagories);

function App() {
	const [menuItems, setMenuItems] = useState(items);
	const [categories, setCategories] = useState(allCatagories);

	const filterItems = (category) => {
		if (category === 'all') {
			setMenuItems(items);
			return;
		}
		const newItems = items.filter((item) => item.category === category);
		setMenuItems(newItems);
	};

	return (
		<section className="mian section">
			<div className="title">
				<h2>our menu</h2>
				<div className="underline"></div>
			</div>
			<Categories categories={categories} filterItems={filterItems} />
			<Menu items={menuItems} />
		</section>
	);
}

export default App;
