import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Damage = (props) => 
  <div>
    <Card body>
      <CardTitle>Die: {props.calculation.die_value}</CardTitle>
      <ListGroup>
        <ListGroupItem>Damage Range: {props.calculation.min}-{props.calculation.max}</ListGroupItem>
        <ListGroupItem>Average Damage: {props.calculation.average}</ListGroupItem>
      </ListGroup>
      <Button>Save Result!</Button>
    </Card>
  </div>

export default Damage;