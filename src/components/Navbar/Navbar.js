import React from "react";
import "./Navbar.css";
import "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
    <nav>
         <div>
            
            <ul>
            <img src="https://i01.appmifile.com/webfile/globalimg/events/2018/newtemp/orange-logo.png"
             alt="mi"
             width="50px"
             height="50px"
        
             />
            <li>
                <Link to="/Store">Store</Link>
                </li>
            <li>
                <Link to="/Phone">Phone</Link>
                </li>
            <li>
                <Link to="/TvSmartHome">TvSmartHome</Link>
                </li>
            <li>
                <Link to="/LaptopTablet">LaptopTablet</Link>
                </li>
            </ul>
         </div>
    </nav>
    )
};

export default Navbar;
