import React, { Component } from 'react';
import User from '../components/user/User';
import { connect } from 'react-redux'
import { fetchUser, createUser, login } from '../actions/userActions'

class UserContainer extends Component {
  render() {
    return(
      <div>UserContainer {sessionStorage.getItem("id")}!</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.data
  }
}

export default connect(mapStateToProps)(UserContainer)