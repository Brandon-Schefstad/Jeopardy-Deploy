import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Clue from './Clue';

const CategoryHeader = (props) => {
	const [clue, setClue] = useState([]);
	//Populate Data in Header
	function fixHeaders() {
		const title = props.data.title;
		const words = title.split(' ');
		for (let i = 0; i < words.length; i++) {
			words[i] = words[i][0].toUpperCase() + words[i].substr(1);
		}
		const titleHeader = words.join(' ');
		return titleHeader;
	}
	async function goFetch() {
		axios
			.get(`http://jservice.io/api/clues?category=${props.data.id}`)
			.then(function (response) {
				setClue(response.data);
			});
	}
	useEffect(() => {
		goFetch();
	}, []);

	return (
		<div className="category__header">
			<h2 className="category__header__text" key={fixHeaders()}>
				{fixHeaders()}
			</h2>
			<Clue data={clue} />
		</div>
	);
};

export default CategoryHeader;
