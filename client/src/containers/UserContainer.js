import React, { Component } from 'react';
import User from '../components/user/User';
import { connect } from 'react-redux'
import { fetchUser, createUser, login } from '../actions/userActions'
import ToHitContainer from '../containers/ToHitContainer'
import { 
  Container 
} from 'reactstrap'

class UserContainer extends Component {
  render() {
    return(
      <Container>
        <User user={this.props.user}/>
        <ToHitContainer />
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.data
  }
}

export default connect(mapStateToProps)(UserContainer)