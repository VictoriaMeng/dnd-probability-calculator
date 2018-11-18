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

const MainNav = (props) => 
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
  </Nav>
export default MainNav