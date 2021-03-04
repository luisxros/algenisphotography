import React from "react";
import './Header.css';
import {Link} from 'react-router-dom';
import AlgenisLogo from '../../images/Logo/AlgenisLogo.png'

import Navbar from '../Navbar/Navbar';



function Header() {
  return(
    <div className="Header">
      <Link to="/">
        <img src={AlgenisLogo} alt="AlgenisLogo"/>
      </Link>
      <Navbar />
    </div>
  )
}

export default Header;