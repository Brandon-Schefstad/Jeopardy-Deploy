import { useEffect, useState } from 'react';
import './App.css';
import Category from './components/Category';
import axios from 'axios';
import PlayerContainer from './components/PlayerContainer';
function App() {
	// Category is passed onto child component as props
	const [category, setCategory] = useState([]);
	const [isLoad, setIsLoad] = useState([false]);

	// Gets fetch
	async function goFetch() {
		axios
			.get('https://jservice.io/api/categories?count=100')
			.then(function (response) {
				const catArray = response.data;
				let returnArray = [];
				for (let i = 0; i <= 4; i++) {
					const index = Math.floor(Math.random() * (100 - 1 + 1) + 1);
					returnArray.push(catArray[index]);
					console.log(returnArray);
				}
				setCategory(returnArray);
			});

		setIsLoad(true);
	}
	function createApp() {
		return (
			<div className="App">
				<section className="wrapper">
					<button onClick={goFetch}>Create Board</button>
					<div className="gameboard">
						<div className="board">
							<Category data={category} />
						</div>
						<PlayerContainer loading={isLoad} />
					</div>
				</section>
			</div>
		);
	}
	// Ternary to update category or show "Loading"
	return isLoad ? createApp() : 'Loading';
}

export default App;
