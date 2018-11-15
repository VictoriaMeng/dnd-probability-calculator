import React, { Component } from 'react'
import Navigation from '../components/nav/Nav.js'
import { connect } from 'react-redux'
import { logout } from '../actions/userActions'
import { Redirect } from "react-router-dom";
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
  render() {
    return (
      <div>
        <Navbar>
          <Navigation logout={this.props.logout} />
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