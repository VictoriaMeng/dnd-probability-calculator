import React, { Component } from 'react'
import Damage from './Damage'

export default class DamageList extends Component {
  renderDamage = () => {
    return this.props.damageCalculations.reverse().map(d => {
      return <Damage calculation={d} key={d.id} />
    })
  }
  
  render() {
    return(
      this.renderDamage()
    )
  }
}