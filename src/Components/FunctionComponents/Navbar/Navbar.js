import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="https://www.google.com/logos/doodles/2023/kamala-sohonies-112th-birthday-6753651837109236-s.png" alt='google.img' 
            width="100px"
            height="50px"
            />
        </div>
        <ul>
             <li ><Link to="/" > Home</Link>
              </li>
            <li>
              <Link to="/About">About</Link>
              </li>
            <li>
              <Link to="/Project">Projects</Link>
              </li> 
            <li>
              <Link to="/Contact">Contact</Link>
              </li>
              <li>
              <Link to="/Contact">Redux Component</Link>
              </li>
        </ul>
    </nav>
  );
};

export default Navbar;