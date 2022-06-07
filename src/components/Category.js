import React from 'react';
import CategoryHeader from './CategoryHeader';

const Category = ({ data }) => {
	let newArr = data.slice(0, 5);
	// Accepts array of 5 categories and passes each onto CategoryHeader as props
	return newArr.map((x) => <CategoryHeader key={x.id} data={x} />);
};

export default Category;
