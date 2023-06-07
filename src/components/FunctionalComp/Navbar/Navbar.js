import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav>
         <div style={{display:'flex'}}>
            <div style={{flex:'1'}}>
                <img src="https://m.media-amazon.com/images/M/MV5BYjgwYTU1YjEtZjJmNC00YTczLWIxNTItNGZkNDAzMjA0MWQ5XkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_.jpg" 
                alt="logo" width="280px" height="101px"/>
            </div>
            <div style={{flex:'7'}}>
            <ul>
              <li>
                  <Link to ="/Home">Home</Link>
              </li>
              <li>
                  <Link to="/About">About</Link>
              </li>
              <li>
                  <Link to="/Contact">Contact</Link>
              </li>
              <li>
                  <Link to="/Projects">Projects</Link>
              </li>
          </ul>
          </div>
            </div>
          
    </nav>
  )
}

export default Navbar