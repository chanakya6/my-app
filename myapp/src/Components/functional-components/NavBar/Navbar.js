import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
       <div>
        <img src='https://th.bing.com/th/id/R.7f34a70a5bee79488309934920d316cb?rik=IRJI6pSFo6OI%2fQ&riu=http%3a%2f%2fallpicts.in%2fwp-content%2fuploads%2f2018%2f03%2fNatural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg&ehk=JPI0MFI04N62Xtd7MT1P2sw4vJgwODLsp1EcpgvuGFo%3d&risl=&pid=ImgRaw&r=0'alt=""/>
       </div>
       <div>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to = "/about">About</Link>
            </li>
            <li><Link to = "/conatct">Conatct</Link></li>
            <li><Link to = "/project">Project</Link></li>
        </ul>
       </div>
    </nav>
  )
}

export default Navbar;