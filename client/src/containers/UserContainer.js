import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUserData } from '../actions/userActions'
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
      if (this.noCalculations()) {
        this.props.fetchUserData()
      }   
    }
  }

  emptyProp = (prop) => {
    return prop.length == 0
  }

  noCalculations = () => {
    return this.emptyProp(this.props.hitChances) || this.emptyProp(this.props.damageCalculations)
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
        <h2>Your Calculations</h2>
        <Row>
          <Col>
            <h3>Hit/Saving Throw</h3>
            <ToHitList hitChances={this.props.hitChances} />
          </Col>
          <Col>
            <h3>Damage</h3>
            <DamageList damageCalculations={this.props.damageCalculations}/>
          </Col>
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