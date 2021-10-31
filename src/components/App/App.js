import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import BooksContainer from '../BooksContainer/BooksContainer';
import BookCard from '../BookCard/BookCard';
import BookOverview from '../BookOverview/BookOverview';
import QueryContextProvider, { QueryContext } from '../../context/QueryContext';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';

const App = () => {
	return (
		<div className="App">
				<QueryContextProvider>
					<Route exact path='/' >
					<section className="landing-body">
						<p>Login</p>
						<h1>readME</h1>
						<p>Welcome to readME, tell us a book you like and we will help you find your next reading</p>
						<SearchBar />
					</section>
					</Route>
					<Route exact path='/search/:searchTerm' render={( { match } ) => {
						return (
							<>
							 <Nav />
							 <BooksContainer />
							</>
						)
					}} />
				</QueryContextProvider>	
		</div>
	);
};

export default App;
