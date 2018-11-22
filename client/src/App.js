import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import ToHitContainer from './containers/ToHitContainer'
import DamageContainer from './containers/DamageContainer'
import Home from './components/Home'
import AuthInput from './components/auth/AuthInput'
import AuthContainer from './containers/AuthContainer'
import UserContainer from './containers/UserContainer'
import { store } from './index'
import NavContainer from './containers/NavContainer'
import ErrorContainer from './containers/ErrorContainer'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <NavContainer />
        <ErrorContainer />
        <Route exact path="/" component={Home}/>
        <Route path='/to-hit' component={ToHitContainer}/>
        <Route path='/damage' component={DamageContainer}/>
        <Route path='/signup' render={props => <AuthContainer {...props} action="Register" />}/>
        <Route path="/login" render={props => <AuthContainer {...props} action="Login" />}/>
        <Route path="/users/:id" render={props => <UserContainer {...props}/>} />
      </div>
    )
  }
}

const mapStateToProps = state => {
}

export default connect()(App)

