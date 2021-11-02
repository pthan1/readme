import React from 'react';
import './BookCard.css';
import { useHistory } from 'react-router-dom';

const BookCard = ({ imageLinks, title, category, addCategory }) => {
	const history = useHistory();

	return (
		<div onClick={() => {
			addCategory(category)
			history.push(`/recommendations`);
		}} className="book-card">
			<img src={imageLinks} alt={`${title} cover`}/>
			<p>{title}</p>
		</div>
	);
};

export default BookCard;
