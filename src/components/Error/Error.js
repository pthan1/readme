import { React } from 'react'
import './Error.css'
import SearchBar from '../SearchBar/SearchBar'
import logo2 from '../../images/logo-book2.png'

const Error = () => {
  return ( 
    <section className="landing-body">
      <img className="logo" alt="readme logo" src={logo2} />
      <p className="prompt">We are sorry, something went wrong, please try searching again...</p>
      <SearchBar />
    </section>
   );
}
 
export default Error;