import React, { Component } from 'react';
import User from '../components/User';
import { connect } from 'react-redux'
import { fetchUser, createUser } from '../actions/userActions'

class UserContainer extends Component {
  componentDidMount() {
    // this.props.fetchUser(this.props.match.params.id)
  }

  renderChildren = () => {
  }

  render() {
    return (
      <User id={1}/>
    )
  }
}

const mapStateToProps = (state) => {
  debugger;
  return {
    user: state.users[0]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    createUser: formData => dispatch(createUser(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)