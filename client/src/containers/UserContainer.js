import React, { Component } from 'react';
import User from '../components/user/User';
import { connect } from 'react-redux'
import { fetchUserData, createUser, login } from '../actions/userActions'
import { clearErrors } from '../actions/errorActions'
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
    this.props.clearErrors()
    if (sessionStorage.hasOwnProperty('id')) {
      if (this.props.hitChances.length == 0 || this.props.damageCalculations == 0) {
        this.props.fetchUserData()
      }   
    }
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
  return {
    hitChances: state.hitChances.data,
    damageCalculations: state.damageCalculations.data,
    isLoggedIn: state.session.isLoggedIn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkLogin: () => dispatch(checkLogin()),
    fetchUserData: () => dispatch(fetchUserData()),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)