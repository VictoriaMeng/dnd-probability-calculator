import React, { Component, Fragment } from 'react'
import ToHit from './ToHit'

export default class ToHitList extends Component {
  renderToHit = () => {
    return this.props.hitChances.reverse().map(h => {
      return <ToHit calculation={h} key={h.id} />
    })
  }
  
  render() {
    return (
      this.renderToHit()
    )
  }
}