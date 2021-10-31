import React, { useState, useEffect, useContext } from 'react';
import { QueryContext } from '../../context/QueryContext';
import BookCard from '../BookCard/BookCard';
import './BooksContainer.css';

const BooksContainer = () => {
	const [
		searchResults,
		setSearchResults
	] = useState([]);
	const { bookTitle } = useContext(QueryContext)

	useEffect((bookTitle) => {
			fetch(
			`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w`
		)
			.then((response) => response.json())
			.then((data) => console.log(data));
	}, [bookTitle]);


	const bookCards = searchResults.map((searchResult) => {
		return (
			<BookCard
			// className={'card'} id={id} key={key} poster_path={path} title={title}
			/>
		);
	}, []);

	return bookTitle ? (
		<div className="books-container-view">
			<div>
				<h2>Our Recommendations</h2>
			</div>
			<div className="card-container">{bookCards}</div>
		</div>
	) : (
		<div><h2>something went wrong</h2></div>
	)
};

export default BooksContainer;
