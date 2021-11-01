import React from 'react';
import './BookCard.css';
import { useHistory } from 'react-router-dom';

const BookCard = ({ imageLinks, title, category, addCategory, switchSearchToggle }) => {
	const history = useHistory();

	return (
		<div onClick={() => {
			addCategory(category)
			switchSearchToggle();
			history.push(`/recommendations`);
			}} className="book-card">
			<img src={imageLinks} />
			<p>{title}</p>
		</div>
	);
};

export default BookCard;
