import React, { useState, useEffect } from 'react';
import BookCard from '../BookCard/BookCard';
import './BooksContainer.css';

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
			.then((data) => setSearchResults(data.items));
	}, []);

	const bookCards = searchResults.map((searchResult) => {
		return (
			<BookCard
			// className={'card'} id={id} key={key} poster_path={path} title={title}
			/>
		);
	}, []);

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
