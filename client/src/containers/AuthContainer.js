import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { createUser } from '../actions/userActions'
import { login } from '../actions/sessionActions'
import AuthInput from '../components/auth/AuthInput'
import { Redirect } from "react-router-dom";
import { clearErrors } from '../actions/errorActions'

class AuthContainer extends Component {
  componentDidMount() {
    this.props.clearErrors()
  }

  renderChildren = () => {
    if (this.props.isLoggedIn) {
      return (
        <Redirect 
          to={{
            pathname: `/users/${sessionStorage.getItem('id')}`,
          }} 
         />
      )
    } else {
      return (
        <AuthInput action={this.props.action} login={this.props.login} createUser={this.props.createUser} />
      )
    }
  }

  render() {
    return (
      this.renderChildren()
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.session.isLoggedIn
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