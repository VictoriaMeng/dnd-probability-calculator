import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Damage = (props) => 
  <div>
    <Card body>
      <CardTitle>Die: {props.calculation.die}</CardTitle>
      <ListGroup>
        <ListGroupItem>Damage Range: {props.calculation.damageRange}</ListGroupItem>
        <ListGroupItem>Average Damage: {props.calculation.averageDamage}</ListGroupItem>
      </ListGroup>
    </Card>
  </div>

export default Damage;