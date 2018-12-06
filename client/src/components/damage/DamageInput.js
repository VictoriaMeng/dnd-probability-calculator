import React, { Component, Fragment } from 'react';
import { Form, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'

export default class DamageInput extends Component {
  componentDidUpdate() {
    if (this.props.newPost) {
      this.setRedirect()
    }
  }
 
  state = {
    dice_count: "",
    die_value: 4,
    user_id: sessionStorage.getItem('id'),
    redirect: false
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={{
                pathname: `/users/${this.state.user_id}`,
              }} />
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.calculateDamage(this.state)
  }
  
  render() {
    return (
      <Fragment>
        {this.renderRedirect()}
        <h2>Damage Calculator</h2>
        <Form inline className='form mt-xl-5' onSubmit={this.handleSubmit}>
          <Input onChange={this.handleChange} type="number" name="dice_count" id="dice-count" />
          <Input onChange={this.handleChange} type="select" name="die_value" id="die-value">
            <option value="4">d4</option>
            <option value="6">d6</option>
            <option value="8">d8</option>
            <option value="10">d10</option>
            <option value="12">d12</option>
          </Input>
          <Input className='input-btn ml-sm-2' type="submit" value="Calculate!"></Input>
        </Form>
      </Fragment>
    )
  }
} 