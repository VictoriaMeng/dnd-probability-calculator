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

const Navigation = () => 
  <Nav navbar>
    <NavItem>
      <NavLink tag={Link} to="/logout" onClick={alert("hi")}>
        Logout
      </NavLink>
    </NavItem>
  </Nav>

export default Navigation
