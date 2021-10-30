import React from 'react';
import './BookOverview.css';

const BookOverview = () => {
	return (
		<div className="book-overview-view">
			<div className="left-side">
				<img className="back-button" />
				<h2>Our Recommendations</h2>
			</div>
			<div className="book-overview-body">
				<h2>Book Title</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
					pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
					Nulla aliquet porttitor venenatis.
				</p>
				<p>Author:</p>
				<p>Rating: </p>
				<p>Links: </p>
				<button>Add To Reading List</button>
			</div>
		</div>
	);
};

export default BookOverview;
