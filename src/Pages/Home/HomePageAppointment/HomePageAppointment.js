import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePageAppointment.css';

const HomePageAppointment = () => {
  return (
    <div className="home-page-appointment d-flex align-items-center">
      <Container>
        <Row>
          <Col lg={12} className="py-5">

            <div className="d-flex justify-content-left align-items-center appointment-logo-heading mb-3">
              <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/decent-healthcare/logo.png" alt="logo" />
              <h1 className="brand-color">Decent Healthcare</h1>
            </div>

            <h2 className="text-white fw-bold">Do not hesitate, contact us for better services. We are at your service 24 hours a day.</h2>

            <Link to="/appointment" className="mx-auto">
              <button className="appoint-btn"><i className="fas fa-plus appoint-plus-icon"></i> Make Appointment</button>
            </Link>
            
          </Col> 
        </Row>
      </Container>
    </div>
  );
};

export default HomePageAppointment;