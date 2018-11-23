import React, { Component } from 'react';
import User from '../components/user/User';
import { connect } from 'react-redux'
import { fetchUser, createUser, login } from '../actions/userActions'
import { fetchHitChances, fetchDamage } from '../actions/calculatorActions'
import ToHitList from '../components/toHit/ToHitList'
import DamageList from '../components/damage/DamageList'
import { 
  Container,
  Row,
  Col
} from 'reactstrap'
import { checkLogin } from '../actions/sessionActions'

class UserContainer extends Component {
  componentDidMount() {
    this.props.fetchHitChances()
    this.props.fetchDamage()
    this.props.checkLogin()
  }

  componentDidUpdate() {
    this.props.checkLogin()
  }

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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHitChances: () => dispatch(fetchHitChances()),
    fetchDamage: () => dispatch(fetchDamage()),
    checkLogin: () => dispatch(checkLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)