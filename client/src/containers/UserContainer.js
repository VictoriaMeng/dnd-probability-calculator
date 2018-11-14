import React, { Component } from 'react';
import User from '../components/User';
import { connect } from 'react-redux'
import { fetchUser, createUser, login } from '../actions/userActions'
import UserInput from '../components/UserInput'
import { store } from '../index'

class UserContainer extends Component {
  componentDidMount() {
  }

  renderChildren = () => {
    if (this.props.isLoggedIn) {
      return (
        <User user={this.props.user}/>
      )
    } else {
      return (
        <UserInput action={this.props.action} login={this.props.login} createUser={this.props.createUser} />
      )
    }
  }

  render() {
    return (
      <div>{this.renderChildren()}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.data,
    isLoggedIn: state.users.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    createUser: formData => dispatch(createUser(formData)),
    login: formData => dispatch(login(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)