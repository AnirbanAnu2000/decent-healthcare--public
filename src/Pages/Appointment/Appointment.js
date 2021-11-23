import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Appointment = () => {
  return (
    <div>
      <Container className="border-top border-1 border-primary">
        <h1 className="fw-bold brand-color text-center mt-5 mb-4" style={{fontSize:"50px"}}>Appointment Information</h1>
        <Row className="justify-content-center">
          <Col lg={8} className="pb-5">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Your Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Contact Number</Form.Label>
                <Form.Control type="text" placeholder="Your Contact Number" />
              </Form.Group>
            
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold">Service You Needed</Form.Label>
                <Form.Control type="text" placeholder="Service" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold">Consultant, You Want To Get Appointment</Form.Label>
                <Form.Control type="text" placeholder="Consultant Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="fw-bold">Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Message" />
              </Form.Group>

              <Button variant="primary" className="fw-bold" type="submit">
                Make Appointment
              </Button>
            </Form>
          </Col>  
        </Row>
      </Container>
    </div>
  );
};

export default Appointment;