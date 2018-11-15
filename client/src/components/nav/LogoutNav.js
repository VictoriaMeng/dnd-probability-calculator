import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

const LogoutNav = (props) => 
  <Nav>
    <NavItem>
      <NavLink tag={Link} to="/" onClick={props.logout}>
        Logout
      </NavLink>
    </NavItem>
  </Nav>

export default LogoutNav