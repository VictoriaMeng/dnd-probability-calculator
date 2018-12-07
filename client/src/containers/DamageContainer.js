import React, { Component } from 'react';
import DamageInput from '../components/damage/DamageInput'
import { damage } from '../actions/damageActions'
import { connect } from 'react-redux'
import { clearErrors } from '../actions/errorActions'

class DamageContainer extends Component {
  componentDidMount() {
    this.props.clearErrors()
  }

  render() {
    return (
      <DamageInput newPost={this.props.newPost} calculateDamage={this.props.calculateDamage} />
    )
  }
}

const mapStateToProps = state => {
  return {
    newPost: state.damageCalculations.newPost
  }
}

const mapDispatchToProps = dispatch => {
  return {
    calculateDamage: formData => dispatch(damage(formData)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DamageContainer)