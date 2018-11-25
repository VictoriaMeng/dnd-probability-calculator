import React, { Component } from 'react';
import DamageInput from '../components/damage/DamageInput'
import Damage from '../components/damage/Damage'
import { damage } from '../actions/calculatorActions'
import { connect } from 'react-redux'
import DamageList from '../components/damage/DamageList'

class DamageContainer extends Component {
  render() {
    return (
      <div>
        <DamageInput newPost={this.props.newPost} calculateDamage={this.props.calculateDamage} />
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
    calculateDamage: formData => dispatch(damage(formData))
  }
}

export default connect(null, mapDispatchToProps)(DamageContainer)