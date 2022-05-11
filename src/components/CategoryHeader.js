import React from 'react';

const CategoryHeader = (props) => {
	const title = props.data.title;
	const words = title.split(' ');
	for (let i = 0; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].substr(1);
	}
	const titleHeader = words.join(' ');
	return (
		<div className="category__header">
			<span className="category__header__text">{titleHeader}</span>
		</div>
	);
};

export default CategoryHeader;
