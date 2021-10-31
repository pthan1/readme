import React, { createContext, useState } from 'react';

export const QueryContext = createContext();

const QueryContextProvider = (props) => {
	const [
		bookTitle,
		setBookTitle
	] = useState('');

	const addBookTitle = (userInput) => {
		const processedInput = userInput.split(' ');
		if (processedInput.length === 1) {
			setBookTitle(userInput);
		} else {
			const multipleQuery = processedInput.join('+');
			setBookTitle(multipleQuery);
		}
	};

	return <QueryContext.Provider value={{ bookTitle, addBookTitle }}>{props.children}</QueryContext.Provider>;
};

export default QueryContextProvider;
