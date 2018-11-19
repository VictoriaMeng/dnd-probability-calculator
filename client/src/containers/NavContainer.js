import React, { Component } from 'react'
import MainNav from '../components/nav/MainNav.js'
import AuthNav from '../components/nav/AuthNav.js'
import LogoutNav from '../components/nav/LogoutNav'
import { connect } from 'react-redux'
import { logout } from '../actions/userActions'
import { checkLogin } from '../actions/sessionActions'
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
  // componentDidMount(dispatch) {
  //   this.props.checkLogin()
  // }

  renderAuthLinks = () => {
    if (!this.props.isLoggedIn) {
      return (
        <AuthNav />
      )
    }
  }

  renderLogout = () => {
    if (this.props.isLoggedIn) {
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

const mapStateToProps = state => {
  // debugger;
  return {
    isLoggedIn: (sessionStorage.hasOwnProperty('id'))
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    checkLogin: () => dispatch(checkLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer)