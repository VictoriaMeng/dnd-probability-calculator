import React, { Component } from 'react'
import Damage from './Damage'
import { Container } from 'reactstrap'

export default class DamageList extends Component {
  renderDamage = () => {
    return this.props.damageCalculations.reverse().map(d => {
      return <Damage calculation={d} key={d.id} />
    })
  }
  
  render() {
    return(
      <Container>{this.renderDamage()}</Container>
    )
  }
}