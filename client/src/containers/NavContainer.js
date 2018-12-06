import React, { Component } from 'react'
import PublicNav from '../components/nav/PublicNav.js'
import PrivateNav from '../components/nav/PrivateNav'
import { connect } from 'react-redux'
import { logout } from '../actions/sessionActions'
import { checkLogin } from '../actions/sessionActions'
import { Navbar, Container } from 'reactstrap';

class NavContainer extends Component {
  componentDidMount() {
    this.props.checkLogin()
  }

  componentDidUpdate() {
    this.props.checkLogin()
  }

  renderAuthLinks = () => {
    if (!this.props.isLoggedIn) {
      return (
        <PublicNav />
      )
    }
  }

  renderLogout = () => {
    if (this.props.isLoggedIn) {
      return (
        <PrivateNav logout={this.props.logout} />
      )
    }
  }

  render() {
    return (
      <Container className='main-nav'>
        <Navbar>
          {this.renderAuthLinks()}
          {this.renderLogout()}
        </Navbar>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.session.isLoggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    checkLogin: () => dispatch(checkLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer)