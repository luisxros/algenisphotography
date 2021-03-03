import React, { Component } from "react";
import {Link} from 'react-router-dom';

import { withRouter } from "react-router-dom";
import './Header.css';

class Header extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      const path = this.props.location.pathname.slice(1);
      return (
        <div className="Header">
          <h1>{path}</h1>
         
          <ul className="links">
              <li><Link to="/Portraits">Portraits</Link></li>
              <li><Link to="/Fashion">Fashion</Link></li>
              <li><Link to="/Food">Food</Link></li>
              <li><Link to="/Corporate">Corporate</Link></li>
              <li><Link to="/Maternity">Maternity</Link></li>
              <li><Link to="/Family">Family</Link></li>
              <li><Link to="/Wedding">Wedding</Link></li>
              <li><Link to="/Rates">Rates</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
          </ul>
          
        </div>
      );
    }
  }
  
  export default withRouter(Header);