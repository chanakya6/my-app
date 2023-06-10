import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  return (
    <nav className='header'>
      <div className='block1'>
        <div className='Gym_image'></div>
      </div>
      <div className='block2'>
        <ul>
          <li><Link to={'/'} className='link'>Home</Link></li>
          <li><Link to={'/Aboutus'} className='link'>Aboutus</Link></li>
          <li><Link to={'/Contact'} className='link'>Contact</Link></li>
          <li><Link to={'/Projects'} className='link'>Projects</Link></li>
          <li><Link to={'/Login'} className='link'>Login</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar1;