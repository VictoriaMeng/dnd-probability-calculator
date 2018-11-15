import React, { Component } from 'react';
import User from '../components/user/User';
import { connect } from 'react-redux'
import { fetchUser, createUser, login } from '../actions/userActions'

class UserContainer extends Component {
  render() {
    return(
      <User user={this.props.user}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.data
  }
}

export default connect(mapStateToProps)(UserContainer)