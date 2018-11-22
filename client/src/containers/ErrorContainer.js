import React, { Component } from 'react'
import ErrorList from '../components/error/ErrorList'
import { connect } from 'react-redux'

class ErrorContainer extends Component {
  renderErrors = () => {
    if (this.props.errors.length > 0) {
      return <ErrorList errors={this.props.errors}/>
    }
  }

  render() {
    return (
      <div>{this.renderErrors()}</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errors
  }
}

export default connect(mapStateToProps)(ErrorContainer)