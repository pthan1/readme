import React from 'react'
import './Nav.css'
import SearchBar from '../SearchBar/SearchBar'

const NavBar = () => {
  return ( 
    <nav>
      <h1>readME</h1>
      <SearchBar />
      <ul>
        <li> Log In </li>
        <li> Read List</li>
      </ul>
    </nav>
   );
}
 
export default NavBar;