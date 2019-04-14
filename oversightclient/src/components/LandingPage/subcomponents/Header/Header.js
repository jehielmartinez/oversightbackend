import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize';
import './Header.css';

import Logo from '../../../../assets/oversight-logo-light.png'

class Header extends Component {

    render() {
        return (
          <Navbar className='navbar z-depth-3' brand={<div><img className='logo' alt='logo' src={Logo}/></div>} alignLinks='right'>
            <NavItem >
              Caracteristicas
            </NavItem>
            <NavItem >
              Funcionalidades
            </NavItem>
            <NavItem >
              Contacto
            </NavItem>
          </Navbar>
        );
    }
}

export default Header;