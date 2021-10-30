import React from 'react';
import BookCard from '../BookCard/BookCard';

const BooksContainer = () => {
	const [
		searchResults,
		setSearchResults
	] = useState([]);

	useEffect(() => {
		const fetchResults = fetch(
			'https://www.googleapis.com/books/v1/volumes?q=dune+subject:fiction&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w'
		)
			.then((response) => response.json())
			.then((data) => console.log(data));
	}, []);

	const bookCards = allBooksData.map((book) => {
		return <BookCard className={'card'} id={id} key={key} poster_path={path} title={title} />;
	});

	return (
		<div className="books-container-view">
			<div>
				<h2>Our Recommendations</h2>
			</div>
			<div className="card-container">{bookCards}</div>
		</div>
	);
};

export default BooksContainer;
