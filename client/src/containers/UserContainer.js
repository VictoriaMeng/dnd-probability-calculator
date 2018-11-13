import React, { Component } from 'react';
import User from '../components/User';
import { connect } from 'react-redux'

class UserContainer extends Component {
  render() {
    return (
      <User id={1} />
    )
  }
}

export default connect()(UserContainer)