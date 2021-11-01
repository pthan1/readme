import React from 'react';
import './BookCard.css';

const BookCard = ({ imageLinks, title }) => {
	return (
		<div className="book-card">
			<img src={imageLinks} />
			<p>{title}</p>
		</div>
	);
};

export default BookCard;
