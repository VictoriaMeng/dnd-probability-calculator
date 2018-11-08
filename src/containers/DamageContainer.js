import React, { Component } from 'react';
import DamageInput from '../components/DamageInput'
import { damageCalc } from '../actions/calculatorActions'
import { connect } from 'react-redux'

class DamageContainer extends Component {
  render() {
    return(
      <DamageInput />
    )
  }
}

const mapDispatchToProps = dispatch => {

}

export default connect(null, mapDispatchToProps)(DamageContainer)