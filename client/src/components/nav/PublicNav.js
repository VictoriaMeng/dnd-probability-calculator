import React from 'react';
import { Nav, NavItem, NavLink, Container } from 'reactstrap'
import { Link } from 'react-router-dom'

const PublicNav = () => 
  <Nav>
    <NavItem>
      <NavLink tag={Link} to ="/signup">
        Register
      </NavLink>
    </NavItem>
  
    <NavItem>
      <NavLink tag={Link} to ="/login">
        Login
      </NavLink>
    </NavItem>
  </Nav>

export default PublicNav