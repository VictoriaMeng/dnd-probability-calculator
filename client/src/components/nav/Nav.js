import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const Navigation = (props) => 
  <Nav>
    <NavItem>
      <NavLink tag={Link} to="/to-hit">
        Calculate To Hit/Saving Throw Chance
      </NavLink>
    </NavItem>

    <NavItem>
      <NavLink tag={Link} to ="/damage">
        Calculate Damage
      </NavLink>
    </NavItem>

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

    <NavItem>
      <NavLink tag={Link} to="/" onClick={props.logout}>
        Logout
      </NavLink>
    </NavItem>
  </Nav>
export default Navigation
