import React from 'react';
import CategoryHeader from './CategoryHeader';

const Category = ({ data }) => {
	// Accepts array of 5 categories and passes each onto CategoryHeader as props
	return data.map((x) => <CategoryHeader key={x.id} data={x} />);
};

export default Category;
