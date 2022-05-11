import axios from 'axios';
import React from 'react';

const CatArray = () => {
	const CatArray = [];
	axios
		.get('https://jservice.io/api/categories?count=100')
		.then(function (response) {
			console.log(typeof response);
			response.data.map((x) => CatArray.push(x));
		});
	return CatArray;
};

export default CatArray;
