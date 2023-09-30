import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function ReduxNavbar() {
  return (
    <div>
        <nav>
        <ul>
            <li>
                <Link to= {"/ReduxHome"} > ReduxHome </Link>
            </li>
            <li>
            <Link to= {"/ReduxAbout"} > ReduxAbout </Link>
            </li>
            <li>
            <Link to= {"/ReduxContactus"} > ReduxConatctus </Link>
            </li>
            <li>
            <Link to= {"/ReduxProject"} > ReduxProject </Link>
            </li>
            <li>
            <Link to= {"/ReduxApp"} > ReduxComponent </Link>
            </li>
            <li>
            <Link to= {"/ReduxAssingment"} > ReduxAssingment </Link>
            </li>
        </ul>
        </nav>
    </div>
  )
}

export default ReduxNavbar