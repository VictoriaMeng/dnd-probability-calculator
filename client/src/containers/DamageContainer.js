import React, { Component } from 'react';
import DamageInput from '../components/damage/DamageInput'
import Damage from '../components/damage/Damage'
import { damage } from '../actions/calculatorActions'
import { connect } from 'react-redux'
import DamageList from '../components/damage/DamageList'
import { clearErrors } from '../actions/errorActions'

class DamageContainer extends Component {
  componentDidMount() {
    this.props.clearErrors()
  }

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
    calculateDamage: formData => dispatch(damage(formData)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DamageContainer)