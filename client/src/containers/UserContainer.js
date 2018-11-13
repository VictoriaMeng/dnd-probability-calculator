import React, { Component } from 'react';
import User from '../components/User';
import { connect } from 'react-redux'
import { fetchUser } from '../actions/userActions'

class UserContainer extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id)
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
    fetchUser: id => dispatch(fetchUser(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)