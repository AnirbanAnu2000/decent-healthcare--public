import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import './HomePageBanner.css';

const HomePageBanner = () => {
  return (
    <div className="home-page-banner">
      <Carousel>
        <Carousel.Item interval={3000} className="slide-item">
          <img
            className="d-block w-100"
            src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/decent-healthcare/banner/hb1.jpg"
            alt="First slide"
          />
          <div className="slide-item-overlay d-flex align-items-center">
            <Container>
              <Row className="justify-content-center">
                <Col lg={10} className="py-4">
                  <div className="text-center">
                    <h1 className="banner-heading">Your Most Trusted Health Partner</h1>
                    <p className="text-white mb-5">If you are looking for the best medical service, you are in the right place</p>
                    <Button variant="primary" size="lg">Read More <i class="fas fa-angle-right"></i></Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000} className="slide-item">
          <img
            className="d-block w-100"
            src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/decent-healthcare/banner/hb2.jpg"
            alt="Second slide"
          />
          <div className="slide-item-overlay d-flex align-items-center">
            <Container>
              <Row className="justify-content-center">
                <Col lg={10} className="py-4">
                  <div className="text-center">
                    <h1 className="banner-heading">We Take Care Of Your Healthy Health</h1>
                    <p className="text-white mb-5">We Provide the highest level of satisfaction care & services to our patients. Building a healthy environment that supports development for the community.</p>
                    <Button variant="primary" size="lg">Read More <i class="fas fa-angle-right"></i></Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000} className="slide-item">
          <img
            className="d-block w-100"
            src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/decent-healthcare/banner/hb3.jpg"
            alt="Third slide"
          />
          <div className="slide-item-overlay d-flex align-items-center">
            <Container>
              <Row className="justify-content-center">
                <Col lg={10} className="py-4">
                  <div className="text-center">
                    <h1 className="banner-heading">Our goal to take care of your health</h1>
                    <p className="text-white mb-5">We Provide the highest level of satisfaction care & services to our patients. Building a healthy environment that supports development for the community.</p>
                    <Button variant="primary" size="lg">Read More <i class="fas fa-angle-right"></i></Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomePageBanner;