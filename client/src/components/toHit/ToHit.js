import React from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ToHit = (props) => 
  <div>
    <Card body className='tile'>
      <CardTitle className='card-header'>Success Chance: {props.calculation.result_text}</CardTitle>
      <CardText>
        <ListGroup className='card-list'>
          <ListGroupItem>Target Stat: {props.calculation.stat}</ListGroupItem>
          <ListGroupItem>Modifier: {props.calculation.modifier}</ListGroupItem>          
          <ListGroupItem>Target Value: {props.calculation.target}</ListGroupItem>
        </ListGroup>
      </CardText>
    </Card>
  </div>

export default ToHit;