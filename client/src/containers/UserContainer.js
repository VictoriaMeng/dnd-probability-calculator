import React, { Component } from 'react';
import User from '../components/user/User';
import { connect } from 'react-redux'
import { fetchUser, createUser, login } from '../actions/userActions'
import ToHitList from '../components/toHit/ToHitList'
import DamageList from '../components/damage/DamageList'
import { 
  Container,
  Row,
  Col
} from 'reactstrap'

class UserContainer extends Component {
  render() {
    return(
      <Container>
        <User />
        <Row>
          <Col><ToHitList hitChances={this.props.hitChances} /></Col>
          <Col><DamageList damageCalculations={this.props.damageCalculations}/></Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    hitChances: state.hitChances,
    damageCalculations: state.damageCalculations,
    user: state.users.data
  }
}

export default connect(mapStateToProps)(UserContainer)