import React, { Component } from 'react'
import Damage from './Damage'

export default class DamageList extends Component {
  renderDamage = () => {
    return this.props.damageCalculations.map(d => {
      return <Damage calculation={d} />
    })
  }
  
  render() {
    return(
      <div>{this.renderDamage()}</div>
    )
  }
}