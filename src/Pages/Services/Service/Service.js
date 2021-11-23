import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
  const {name, shortDetail, img} = props.service;
  return (
    <Col>
      <Card style={{borderRadius:"10px"}}>
        <Card.Img variant="top" src={img} style={{height:"300px",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}} />
        <Card.Body>
          <Card.Title><h3 style={{fontSize:"36px"}} className="brand-color fw-bold">{name}</h3></Card.Title>
          <Card.Text>
            {shortDetail} 
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;