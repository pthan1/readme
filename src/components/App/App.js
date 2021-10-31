import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import BooksContainer from '../BooksContainer/BooksContainer';
import BookCard from '../BookCard/BookCard';
import BookOverview from '../BookOverview/BookOverview';
import QueryContextProvider, { QueryContext } from '../../context/QueryContext';

const App = () => {
	return (
		<div className="App">
			<section className="landing-body">
				<p>Login</p>
				<h1>readME</h1>
				<p>Welcome to readME, tell us a book you like and we will help you find your next reading</p>
				<QueryContextProvider>
					<SearchBar />
					<BooksContainer />
				</QueryContextProvider>
			</section>
		</div>
	);
};

export default App;
