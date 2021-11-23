import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect( () => {
    fetch('./services.json')
    .then(res => res.json())
    .then(data => setServices(data));
  }, [])
  
  return (
    <div>
      <Container className="py-5 border-top border-1 border-primary">
        <h2 className="brand-color services-title">Our Services</h2>
        <Row lg={3} xs={1} md={2} className="g-5">
        {
          services.map(service => <Service
            key={service.id}
            service={service} 
            ></Service>)
        }
        </Row>
      </Container>
    </div>
  );
};

export default Services;