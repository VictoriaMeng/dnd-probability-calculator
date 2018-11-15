import React, { Component } from 'react'
import Navigation from '../components/nav/Nav.js'
import { connect } from 'redux'

class NavContainer extends Component {
  render() {
    return (
      <Navigation />
    )
  }
}

export default connect()(NavContainer)