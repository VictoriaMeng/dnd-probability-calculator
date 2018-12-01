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

  hasMultipleErrors = (e) => {
    return e[1].length > 1
  }

  capitalizeKey = (e) => {
    return e[0].charAt(0).toUpperCase() + e[0].slice(1)
  }

  stringifyErrors = () => {
    return Object.entries(this.props.errorMessages)
    .map(e => {
      if (this.hasMultipleErrors(e)) {
        return this.multipleErrors(e)
      } else {
        return this.singleErrors(e)
      }
    }) 
    .join(". ")
  }

  singleErrors = (e) => {
    return `${this.capitalizeKey(e)} ${e[1]}`
  }

  multipleErrors = (e) => {
    return `${this.capitalizeKey(e)} ${e[1].slice(0, -1).join(', ')} and ${e[1].slice(-1)}`
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
    errorMessages: state.errors.messages
  }
}

export default connect(mapStateToProps)(ErrorContainer)