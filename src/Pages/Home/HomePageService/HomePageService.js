import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePageService.css';

const HomePageService = (props) => {
  const {name, shortDetail, img, id} = props.service; 
  const url = `/service/${id}`;

  return (
    <Col>
      <Card style={{borderRadius:"10px"}}>
        <Card.Img variant="top" src={img} style={{height:"300px",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}} />
        <Card.Body>
          <Card.Title><h3 style={{fontSize:"36px"}} className="brand-color fw-bold">{name}</h3></Card.Title>
          <Card.Text>
            {shortDetail} 
          </Card.Text>
          <button className="btn btn-primary fw-bold">
            <Link style={{textDecoration:"none"}} className="text-white" to={url}>Details</Link>
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HomePageService;