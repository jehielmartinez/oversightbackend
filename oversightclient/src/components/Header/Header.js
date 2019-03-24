import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
import logo from '../../assets/oversight2-logo.png';

class Header extends Component {
    render() {
        return (
          <nav>
            <div className="nav-wrapper navbar">
              <img alt='lgo' src={logo} className='logo'/>
              <Link className="brand-logo">Oversight</Link>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><Link to='/list'>Listado Denuncias</Link></li>
                <li><Link to='/list'>Alertas</Link></li>
                <li><Link to='/list'>Login</Link></li>
              </ul>
            </div>
          </nav>
        );
    }
}

export default Header;