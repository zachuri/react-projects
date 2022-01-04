import React from 'react';

const Categories = ({ categories, filterItems }) => {
	return (
		<h2 className="btn-container">
			{categories.map((category, index) => {
				return (
					<button
						type="button"
						className="filter-btn"
						key={index}
						onClick={() => filterItems(category)}
					>
						{category}
					</button>
				);
			})}
		</h2>
	);
};

export default Categories;
