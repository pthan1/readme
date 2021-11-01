import React, { useState, useEffect, useContext } from 'react';
import { QueryContext } from '../../context/QueryContext';
import BookCard from '../BookCard/BookCard';
import './BooksContainer.css';
import uniqueString from 'unique-string';

const BooksContainer = () => {
	const [
		searchResults,
		setSearchResults
	] = useState([]);
	const { bookTitle } = useContext(QueryContext);

	useEffect(
		() => {
			console.log(bookTitle);
			fetch(
				`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&maxResults=30&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w`
			)
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					const filteredResults = data.items.filter(result => result.volumeInfo.imageLinks && result.volumeInfo.categories && result.volumeInfo.title
					);
					const cardInfo = filteredResults.map((result) => {
						if (result.volumeInfo.imageLinks && result.volumeInfo.categories && result.volumeInfo.title) {
							console.log(result);
							let bookKey = uniqueString();
							return {
								categories: result.volumeInfo.categories,
								imageLinks: result.volumeInfo.imageLinks.thumbnail,
								title: result.volumeInfo.title,
								key: bookKey
							};
						}
					});
					setSearchResults(cardInfo);
				})
			}, [bookTitle]
			);
			
			const bookCards = searchResults.map((searchResult) => {
				return (
					<BookCard
						className={'card'}
						imageLinks={searchResult.imageLinks}
						title={searchResult.title}
						key={searchResult.key}
					/>
				);
			})


			return searchResults ? (
		<div className="books-container-view">
			<div>
				<h2>Our Recommendations</h2>
			</div>
			<div className="card-container">{bookCards}</div>
		</div>
	) : (
		<div>
			<h2>something went wrong</h2>
		</div>
	);
};

export default BooksContainer;
