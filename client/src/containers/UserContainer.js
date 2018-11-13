import React, { Component } from 'react';
import User from '../components/User';
import { connect } from 'react-redux'
import { fetchUser } from '../actions/userActions'

class UserContainer extends Component {
  render() {
    return (
      <User id={1} />
    )
  }
}

const MapDispatchToProps = (dispatch) => {
}

export default connect()(UserContainer)