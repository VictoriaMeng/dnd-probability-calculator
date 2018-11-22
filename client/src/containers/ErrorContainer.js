import React, { Component } from 'react'
import ErrorList from '../components/error/ErrorList'
import { connect } from 'react-redux'

class ErrorContainer extends Component {
  notEmpty = (errors) => {
    for (let key in errors) {
      if (errors.hasOwnProperty(key)) {
        return true
      }
    }
    return false
  }

  stringifyErrors = () => {
    return Object.entries(this.props.errors)
    .map(e => {
      return `${e[0].charAt(0).toUpperCase() + e[0].slice(1)} ${e[1].slice(0, -1).join(', ')} and ${e[1].slice(-1)}`
    }) 
    .join(". ")
  }

  renderErrors = () => {
    if (this.notEmpty(this.props.errors)) {
      return <ErrorList errors={this.stringifyErrors()}/>
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