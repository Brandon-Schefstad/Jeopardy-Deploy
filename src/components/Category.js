import React from 'react';
import CategoryHeader from './CategoryHeader';

const Category = ({ data }) => {
	data.forEach(() => console.log(data[1].id));
	return data.map((x) => <CategoryHeader data={x} />);
};

export default Category;
