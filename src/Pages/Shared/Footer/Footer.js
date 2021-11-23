import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <Container className="py-5">
          <Row>
            <Col xl={4}>
              <div className="footer-left-content d-flex align-items-center mb-3">
                <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/decent-healthcare/logo.png" alt="Footer Logo" width="80px" />
                <span style={{fontSize:"40px",fontFamily:"Italianno"}} className="brand-color fw-bold">Decent Healthcare</span>
              </div>
              <div className="text-left">
                <p>We Provide the highest level of satisfaction care & services to our patients. Building a healthy environment that supports development for the community.</p>
              </div>
              <div>
                <ul style={{paddingLeft:0}}>
                  <li><i className="far fa-envelope"></i> decent-healthcare@gmail.com</li>
                  <li><i className="fas fa-map-marker-alt"></i> Mount Tabor, Monsey, New York.</li>
                  <li><i className="fas fa-phone-volume"></i> 914-59-553-4051</li>
                </ul>
              </div>
            </Col>

            <Col xl={4}>
              <h2 style={{fontSize:"40px"}} className="brand-color fw-bold mb-4">Departments</h2>
              <div className="footer-middle-content d-flex align-items-center">
                <ul style={{paddingLeft:0}}>
                  <li>Surgery and Radiology</li>
                  <li>Family Medicine</li>
                  <li>Women’s Health</li>
                  <li>Pediatrics</li>
                  <li>Dermatology</li>
                </ul>
                <ul style={{paddingLeft:0}}>
                  <li>Our Doctors</li>
                  <li>News</li>
                  <li>Shop</li>
                  <li>Contact Us</li>
                  <li>Book an Appointment</li>
                </ul>
              </div>
            </Col>
            <Col xl={4}>
            <h2 style={{fontSize:"40px"}} className="brand-color fw-bold mb-4">News Feeds</h2>
            <div>
              <ul style={{paddingLeft:0}}>
                <li className="">
                  <div className="row">
                    <div className="col-4">
                      <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/decent-healthcare/services/s7.jpg" alt="" width="100%" />
                    </div>
                    <div className="col-8">
                      <div>
                        <h4 className="fw-bold brand-color" style={{fontSize:"24px"}}>We served over 5000+ Patients</h4>
                        <p>14 July 2019</p>
                      </div>
                    </div>
                  </div>            
                </li>
                <li className="">
                  <div className="row">
                    <div className="col-4">
                      <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/decent-healthcare/services/s7.jpg" alt="" width="100%" />
                    </div>
                    <div className="col-8">
                      <div>
                        <h4 className="fw-bold brand-color" style={{fontSize:"24px"}}>We served over 5000+ Patients</h4>
                        <p>14 July 2019</p>
                      </div>
                    </div>
                  </div>            
                </li>
                <li className="">
                  <div className="row">
                    <div className="col-4">
                      <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/decent-healthcare/services/s7.jpg" alt="" width="100%" />
                    </div>
                    <div className="col-8">
                      <div>
                        <h4 className="fw-bold brand-color" style={{fontSize:"24px"}}>We served over 5000+ Patients</h4>
                        <p>14 July 2019</p>
                      </div>
                    </div>
                  </div>            
                </li>
              </ul>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom-part text-center m-0 py-5" style={{backgroundColor:"#000"}}>
        <p className="m-0" style={{color:"#fff"}}>Copyright by@ Decent Healthcare - 2021</p>
      </div>
    </div>
  );
};

export default Footer;