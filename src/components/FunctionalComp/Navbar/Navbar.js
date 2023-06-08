import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/16792190?s=96&v=4"
          alt="ChanuSai6"
          width="50px"
          height="50px"
        />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutUs">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
