import React, { Component } from 'react';
import DamageInput from '../components/DamageInput'
import { damage } from '../actions/calculatorActions'
import { connect } from 'react-redux'

class DamageContainer extends Component {
  render() {
    return(
      <DamageInput />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    calculateDamage: formData => dispatch(damage(formData))
  }
}

export default connect(null, mapDispatchToProps)(DamageContainer)