import React, { Component } from 'react';
import User from '../components/user/User';
import { connect } from 'react-redux'
import { createUser, login } from '../actions/userActions'
import AuthInput from '../components/auth/AuthInput'
import { Redirect } from "react-router-dom";
import { store } from '../index'
import { clearErrors } from '../actions/errorActions'

class AuthContainer extends Component {
  renderChildren = () => {
    if (this.props.isLoggedIn) {
      this.props.clearErrors()
      return (
        <Redirect 
          to={{
            pathname: `/users/${sessionStorage.getItem('id')}`,
          }} 
         />
      )
    } else {
      return (
        <AuthInput hasNewErrors={state.errors.hasNewErrors} action={this.props.action} login={this.props.login} createUser={this.props.createUser} />
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
    isLoggedIn: state.session.isLoggedIn,
    hasNewErrors: state.errors.hasNewErrors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: formData => dispatch(createUser(formData)),
    login: formData => dispatch(login(formData)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)