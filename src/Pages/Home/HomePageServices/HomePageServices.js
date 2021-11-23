import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HomePageService from '../HomePageService/HomePageService';
import './HomePageServices.css';

const HomePageServices = () => {
  const [services, setServices] = useState([]);
  useEffect( () => {
    fetch('./services.json')
    .then(res => res.json())
    .then(data => setServices(data));
  }, [])
  
  return (
    <div>
      <Container className="py-5 border-bottom border-1 mb-5 border-primary">
        <h2 className="brand-color services-title">Our Services</h2>
        <Row lg={3} xs={1} md={2} className="g-5">
        {
          services.map(service => <HomePageService
            key={service.id}
            service={service} 
            ></HomePageService>)
        }
        </Row>
      </Container>
    </div>
  );
};

export default HomePageServices;