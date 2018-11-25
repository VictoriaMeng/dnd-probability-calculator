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
    return Object.entries(this.props.errorMessages)
    .map(e => {
      if (e[1].length > 1) {
        return this.multipleErrors(e)
      } else {
        return this.singleErrors(e)
      }
    }) 
    .join(". ")
  }

  singleErrors = (e) => {
    return `${e[0].charAt(0).toUpperCase() + e[0].slice(1)} ${e[1].slice(0, -1).join(', ')} ${e[1].slice(-1)}`
  }

  multipleErrors = (e) => {
    return `${e[0].charAt(0).toUpperCase() + e[0].slice(1)} ${e[1].slice(0, -1).join(', ')} and ${e[1].slice(-1)}`
  }

  renderErrors = () => {
    if (this.notEmpty(this.props.errorMessages)) {
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
    errorMessages: state.errors.messages,
    hasNewErrors: state.errors.hasNewErrors
  }
}

export default connect(mapStateToProps)(ErrorContainer)