import React, { Component } from 'react'
import Navigation from '../components/nav/Nav.js'
import { connect } from 'react-redux'
import { logout } from '../actions/userActions'
import { Redirect } from "react-router-dom";
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

class NavContainer extends Component {
  renderAuthInputLinks = () => {
    if (!this.props.isLoggedIn) {
      return (
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
      )
    }

  }

  renderLogout = () => {

  }

  render() {
    return (
      <div>
        <Navbar>
          <Navigation logout={this.props.logout} />
          {this.renderAuthInputLinks()}
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = state => {
  debugger;
  return {
    isLoggedIn: state.users.isLoggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer)