import React, { Component } from 'react';
import DamageInput from '../components/DamageInput'
import Damage from '../components/Damage'
import { damage } from '../actions/calculatorActions'
import { connect } from 'react-redux'

class DamageContainer extends Component {
  render() {
    return (
      <div>
        <DamageInput calculateDamage={this.props.calculateDamage} />
        <Damage />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    damageCalculations: state.damageCalculations
  }
}

const mapDispatchToProps = dispatch => {
  return {
    calculateDamage: formData => dispatch(damage(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DamageContainer)