import React, { Component } from 'react'
import MainNav from '../components/nav/MainNav.js'
import AuthNav from '../components/nav/AuthNav.js'
import LogoutNav from '../components/nav/LogoutNav'
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
  renderAuthLinks = () => {
    if (!sessionStorage.hasOwnProperty('id')) {
      return (
        <AuthNav />
      )
    }
  }

  renderLogout = () => {
    if (sessionStorage.hasOwnProperty('id')) {
      return (
        <LogoutNav logout={this.props.logout} />
      )
    }
  }

  render() {
    return (
      <div>
        <Navbar>
          <MainNav />
          {this.renderAuthLinks()}
          {this.renderLogout()}
        </Navbar>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   debugger;
//   return {
//     isLoggedIn: state.users.isLoggedIn
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(NavContainer)