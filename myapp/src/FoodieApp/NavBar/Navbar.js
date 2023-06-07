import React from 'react';
import'./Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{display:"flex", margin:"auto",backgroundColor:"lightgray"}}>
        <div className="navar" >
            <img src='https://cdn2.f-cdn.com/contestentries/1015573/24019110/590aa311c21b0_thumb900.jpg' alt='FoodLogo'
            width={"100px"}
            height={"100px"}/>
        </div>
        <div className='navbar'>
            <ul style={{display:"flex"}}>
                <li style={{flex:"auto"}}>
                    <Link to = "/home">Home</Link>
                </li>
                <li style={{flex:"auto"}}>
                    <Link to ="/recipe">Recipe</Link>
                </li>
                <li style={{flex:"auto"}}>
                    <Link to = "/comments">Comments</Link>
                </li>
                <li style={{flex:"auto"}}>
                    <Link to = "/Refrence">Refrence</Link>
                </li>
                
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;