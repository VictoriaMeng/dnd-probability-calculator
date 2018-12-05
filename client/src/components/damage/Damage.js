import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Damage = (props) => 
  <div>
    <Card body className='tile'>
      <CardTitle>Average Damage: {props.calculation.average}</CardTitle>
      <ListGroup>
        <ListGroupItem>Damage Range: {props.calculation.min}-{props.calculation.max}</ListGroupItem>
        <ListGroupItem>Dice: {props.calculation.dice_count}d{props.calculation.die_value}</ListGroupItem>
      </ListGroup>
    </Card>
  </div>

export default Damage;