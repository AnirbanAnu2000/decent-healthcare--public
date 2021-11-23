import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './HomePageAbout.css';

const HomePageAbout = () => {
  return (
    <div>
      <Container className="pt-5 border-bottom border-primary border-1">
        <Row>
          <Col lg={6} className="py-5">
            <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/decent-healthcare/banner/hb1.jpg" alt="About Us" className="w-100 p-4" />
          </Col>
          <Col lg={6} className="d-flex align-items-center">
            <div className="p-4 home-about-right-content text-center">
              <h2 className="text-center">About Us</h2>
              <p className="text-center">We Provide the highest level of satisfaction care & services to our patients. Building a healthy environment that supports development for the community. Your personal case manager will ensure that you receive the best possible care.</p>
              <Button variant="primary">Read More <i class="fas fa-angle-right"></i></Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePageAbout;