import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ToHit = (props) => 
  <div>
    <Card body>
      <CardTitle>{props.calculation.hitChance}</CardTitle>
      <CardText>
        <ListGroup>
          <ListGroupItem>Target Stat: {props.calculation.stat}</ListGroupItem>
          <ListGroupItem>Modifier: +{props.calculation.modifier}</ListGroupItem>          
          <ListGroupItem>Target Value: {props.calculation.target}</ListGroupItem>
        </ListGroup>
      </CardText>
    </Card>
  </div>

export default ToHit;