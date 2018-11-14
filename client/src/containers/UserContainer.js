import React, { Component } from 'react';
import User from '../components/user/User';
import { connect } from 'react-redux'
import { fetchUser, createUser, login } from '../actions/userActions'

class UserContainer extends Component {
  render() {
    debugger;
    return(
      <div>UserContainer {this.props.user.id}!</div>
    )
  }
}

export default connect()(UserContainer)