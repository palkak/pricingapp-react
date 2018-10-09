import React from 'react';
import {NavLink} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import './Header.css'

const Header = () => (

  <div>
    <Nav>
      <NavLink exact to="/" activeClassName="active"><a>Home</a></NavLink>
      <NavLink to="/tool" activeClassName="active"><a>Tool</a></NavLink>
      <NavLink to="/info" activeClassName="active"><a>Info</a></NavLink>
    </Nav>
  </div>

);

export {Header};