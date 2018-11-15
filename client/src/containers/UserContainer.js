import React, { Component } from 'react';
import User from '../components/user/User';
import { connect } from 'react-redux'
import { fetchUser, createUser, login } from '../actions/userActions'
import ToHitContainer from '../containers/ToHitContainer'
import DamageContainer from '../containers/DamageContainer'
import { 
  Container,
  Row,
  Col
} from 'reactstrap'

class UserContainer extends Component {
  render() {
    return(
      <Container>
        <User user={this.props.user}/>
        <Row>
          <Col><ToHitContainer /></Col>
          <Col><DamageContainer /></Col>
        </Row>
        
        
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