import { useEffect, useState } from 'react';
import './App.css';
import Title from './components/Title';
import Category from './components/Category';
import axios from 'axios';

function App() {
	const [category, setCategory] = useState([]);
	const [isLoading, setIsLoading] = useState([true]);
	async function goFetch() {
		axios
			.get('https://jservice.io/api/categories?count=5')
			.then(function (response) {
				setCategory(response.data);
				console.log(response.data);
			});
		setIsLoading(true);
	}
	useEffect(() => {
		goFetch();
		// console.log(category[0].id);
	}, []);
	if (!isLoading) {
		return 'Waiting';
	} else if (isLoading) {
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
}

export default App;
