import React from 'react';
import { Card, CardTitle } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ToHit = (props) => 
  <Card body className='tile'>
    <CardTitle className='card-header'>Success Chance: {props.calculation.result_text}</CardTitle>
    <ListGroup className='card-list'>
      <ListGroupItem>Target Stat: {props.calculation.stat}</ListGroupItem>
      <ListGroupItem>Modifier: {props.calculation.modifier}</ListGroupItem>          
      <ListGroupItem>Target Value: {props.calculation.target}</ListGroupItem>
    </ListGroup>
  </Card>


export default ToHit;