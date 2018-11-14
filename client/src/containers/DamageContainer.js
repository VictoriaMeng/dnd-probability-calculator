import React, { Component } from 'react';
import DamageInput from '../components/damage/DamageInput'
import Damage from '../components/damage/Damage'
import { damage } from '../actions/calculatorActions'
import { connect } from 'react-redux'

class DamageContainer extends Component {

  displayDamage = () => {
    if (this.props.damageCalculations.length > 0) {
      const calcs = this.props.damageCalculations
      return <Damage calculation={calcs[calcs.length-1]} />
    }
  }

  render() {
    return (
      <div>
        <DamageInput calculateDamage={this.props.calculateDamage} />
        {this.displayDamage()}
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