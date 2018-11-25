import React, { Component } from 'react';
import DamageInput from '../components/damage/DamageInput'
import Damage from '../components/damage/Damage'
import { damage } from '../actions/calculatorActions'
import { connect } from 'react-redux'
import DamageList from '../components/damage/DamageList'
import { clearErrors } from '../actions/errorActions'

class DamageContainer extends Component {
  render() {
    return (
      <div>
        <DamageInput clearErrors={this.props.clearErrors} newPost={this.props.newPost} calculateDamage={this.props.calculateDamage} />
      </div>
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