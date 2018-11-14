import React, { Component } from 'react';
import User from '../components/user/User';
import { connect } from 'react-redux'
import { fetchUser, createUser, login } from '../actions/userActions'
import UserInput from '../components/user/UserInput'

class AuthContainer extends Component {
  componentDidMount() {
  }

  renderChildren = () => {
    if (this.props.isLoggedIn) {
      return (
        <User id={this.props.match.params.id}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)