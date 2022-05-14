import { useEffect, useState } from 'react';
import './App.css';
import Title from './components/Title';
import Category from './components/Category';
import axios from 'axios';
import Player from './components/Player';
function App() {
	// Category is passed onto child component as props
	const [category, setCategory] = useState([]);
	const [isLoad, setIsLoad] = useState([false]);

	// Gets fetch
	async function goFetch() {
		axios
			.get('https://jservice.io/api/categories?count=5')
			.then(function (response) {
				setCategory(response.data);
				console.log(response.data);
			});
		setIsLoad(true);
	}
	useEffect(() => {
		goFetch();
	}, []);

	// function to create a column, passing in category as props from fetch request.
	function createColumn() {
		return (
			<div className="App">
				<section className="wrapper">
					<button onClick={goFetch}>Click Here</button>
					<Title />
					<div className="gameboard">
						<div className="board">
							<Category data={category} />
						</div>
						<Player />
					</div>
				</section>
			</div>
		);
	}
	// Ternary to update category or show "Loading"
	return isLoad ? createColumn() : 'Loading';
}

export default App;
