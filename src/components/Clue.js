import React from 'react';
import ClueCard from './ClueCard';

// From each CategoryHeader response, create an array of five clues.
const Clue = (props) => {
	const clueArray = [];
	for (let i = 0; i < 5; i++) {
		clueArray.push(props.data[i]);
	}
	// Assign each object in array as props to the 5 individual cards
	return clueArray.map((x) => <ClueCard key={x.id} data={x} />);
};
export default Clue;
