import React, { Component } from 'react'
import Navigation from '../components/nav/Nav.js'
import { connect } from 'redux'
import { logout } from '../actions/userActions'

class NavContainer extends Component {
  render() {
    return (
      <Navigation />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect()(NavContainer)