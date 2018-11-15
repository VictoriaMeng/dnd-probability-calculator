import React, { Component } from 'react'
import MainNav from '../components/nav/MainNav.js'
import AuthNav from '../components/nav/AuthNav.js'
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
        <AuthNav />
      )
    }

  }

  renderLogout = () => {
    if (this.props.isLoggedIn) {
      return (
        <Nav>
              <NavItem>
        <NavLink tag={Link} to="/" onClick={this.props.logout}>
          Logout
        </NavLink>
      </NavItem>
        </Nav>
      )
    }
  }

  render() {
    return (
      <div>
        <Navbar>
          <MainNav logout={this.props.logout} />
          {this.renderAuthInputLinks()}
          {this.renderLogout()}
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