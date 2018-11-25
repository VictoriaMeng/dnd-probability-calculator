import React, { Component } from 'react';
import User from '../components/user/User';
import { connect } from 'react-redux'
import { fetchUserData, createUser, login } from '../actions/userActions'
import { fetchHitChances, fetchDamage } from '../actions/calculatorActions'
import ToHitList from '../components/toHit/ToHitList'
import DamageList from '../components/damage/DamageList'
import { 
  Container,
  Row,
  Col
} from 'reactstrap'
import { checkLogin } from '../actions/sessionActions'
import  { Redirect } from 'react-router-dom'

class UserContainer extends Component {
  componentDidMount() {
    if (sessionStorage.hasOwnProperty('id')) {
      if (this.props.hitChances.length == 0 || this.props.damageCalculations == 0) {
        this.props.fetchUserData()
      }   
    }
    // this.props.checkLogin()
  }

  componentDidUpdate() {
    // this.props.checkLogin()
  }

  redirectToAuth = () => {
    if (!sessionStorage.hasOwnProperty('id')) {
      return <Redirect to="/login" action="Login"/>
    }
  }

  render() {
    return(
      <Container>
        {this.redirectToAuth()}
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
  debugger;
  return {
    hitChances: state.hitChances.data,
    damageCalculations: state.damageCalculations.data,
    isLoggedIn: state.session.isLoggedIn,
    // newHitChance: state.hitChances.newPost,
    // newDamage: state.damageCalculations.newPost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHitChances: () => dispatch(fetchHitChances()),
    fetchDamage: () => dispatch(fetchDamage()),
    checkLogin: () => dispatch(checkLogin()),
    fetchUserData: () => dispatch(fetchUserData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)