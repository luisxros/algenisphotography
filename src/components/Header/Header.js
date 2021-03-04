import React from "react";
import './Header.css';
import AlgenisLogo from '../../images/AlgenisLogo.png'

import Navbar from '../Navbar/Navbar';



function Header() {
  return(
    <div className="Header">
      <img src={AlgenisLogo} alt="AlgenisLogo"/>
      <Navbar />
    </div>
  )
}

export default Header;