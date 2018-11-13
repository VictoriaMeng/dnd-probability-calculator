import React, { Component } from 'react';
import User from '../components/User';
import { connect } from 'react-redux'
import { fetchUser, createUser } from '../actions/userActions'
import UserInput from '../components/UserInput'

class UserContainer extends Component {
  componentDidMount() {
    // this.props.fetchUser(this.props.match.params.id)
  }

  renderChildren = () => {
    if (this.props.isLoggedIn) {
      return (
        <User id={this.props.match.params.id}/>
      )
    } else {
      return (
        <UserInput />
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
  debugger;
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