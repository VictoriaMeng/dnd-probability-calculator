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
  <Nav navbar>
    <NavItem>
      <NavLink tag={Link} to="/" onClick={props.logout}>
        Logout
      </NavLink>
    </NavItem>
  </Nav>

export default Navigation
