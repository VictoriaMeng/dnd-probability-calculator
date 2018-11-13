import React, { Component } from 'react';
import User from '../components/User';
import { connect } from 'react-redux'
import { fetchUser, createUser } from '../actions/userActions'
import UserInput from '../components/UserInput'

class UserContainer extends Component {
  componentDidMount() {
  }

  renderChildren = () => {
    if (this.props.isLoggedIn) {
      return (
        <User id={this.props.match.params.id}/>
      )
    } else {
      return (
        <UserInput action={this.props.action} fetchUser={this.props.fetchUser} createUser={this.props.createUser} />
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
    createUser: formData => dispatch(createUser(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)