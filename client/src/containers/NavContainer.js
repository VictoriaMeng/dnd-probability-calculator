import React, { Component } from 'react'
import Navigation from '../components/nav/Nav.js'
import { connect } from 'react-redux'
import { logout } from '../actions/userActions'
import { Redirect } from "react-router-dom";

class NavContainer extends Component {
  render() {
    return (
      <Navigation logout={this.props.logout} />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(NavContainer)