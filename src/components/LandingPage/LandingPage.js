import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

const LandingPage = () => {
	return (
		<section className="landing-body">
			<p>Login</p>
			<h1>readME</h1>
			<p>Welcome to readME, tell us a book you like and we will help you find your next reading</p>
			<SearchBar />
		</section>
	);
};

export default LandingPage;
