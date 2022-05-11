import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import Title from './components/Title';
import Button from './components/Button';
import Category from './components/Category';
import axios from 'axios';

function App() {
	const [category, setCategory] = useState([]);
	async function goFetch() {
		axios
			.get('https://jservice.io/api/categories?count=5')
			.then(function (response) {
				setCategory(response.data);
				console.log(response.data);
			});
	}
	useEffect(() => {
		goFetch();
		// console.log(category[0].id);
	}, []);

	return (
		<div className="App">
			<button onClick={goFetch}>Click Here</button>
			<Title />
			<div className="board">
				<Category data={category} />
			</div>
		</div>
	);
}

export default App;
