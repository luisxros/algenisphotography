import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <div className="Navbar">
            <ul className="links">
              <li><Link to="/Portraits">Portraits</Link></li>
              <li><Link to="/Couples">Couples</Link></li>
              <li><Link to="/Fashion">Fashion</Link></li>
              <li><Link to="/Corporate">Corporate</Link></li>
              <li><Link to="/Maternity">Maternity</Link></li>
              <li><Link to="/Family">Family</Link></li>
              <li><Link to="/Rates">Rates</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>
    )
}

export default Navbar;