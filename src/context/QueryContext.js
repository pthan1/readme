import React, { createContext, useState } from 'react';

export const QueryContext = createContext();

const QueryContextProvider = (props) => {
	const [
		bookTitle,
		setBookTitle
	] = useState('');

	const [category, setCategory] = useState('');
	const [searchToggle, setSearchToggle] = useState(true);

	const addBookTitle = (userInput) => {
		const processedInput = userInput.split(' ');
		if (processedInput.length === 1) {
			setBookTitle(userInput);
		} else {
			const multipleQuery = processedInput.join('+');
			setBookTitle(multipleQuery);
		}
	};

	const switchSearchToggle = () => {
		setSearchToggle(!searchToggle);
	}

	const addCategory = (userCategory) => {
		const processedInput = userCategory.split(' ');
		if (processedInput.length === 1) {
			setCategory(userCategory);
		} else {
			const multipleQuery = processedInput.join('+');
			setCategory(multipleQuery);
		}
	}

	return <QueryContext.Provider value={{ bookTitle, addBookTitle, searchToggle, switchSearchToggle, category, addCategory }}>{props.children}</QueryContext.Provider>;
};

export default QueryContextProvider;
