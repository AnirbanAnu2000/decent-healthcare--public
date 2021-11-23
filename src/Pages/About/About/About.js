import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
  return (
    <div>
      <Container className="py-5 border-top border-1 border-primary">
        <Row className="justify-content-center">
          <Col md={9} xs={12}>
            <div className="our-mission mb-5">
              <h1 style={{fontSize:"60px"}} className="brand-color text-center">Our Mission</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A deleniti magnam, at consequatur aut voluptatem optio, in non sed quis repellat id iusto mollitia! Odio neque nam laboriosam, rerum molestiae praesentium rem dolor. Saepe voluptatum at nemo, aliquid soluta temporibus? Unde qui quae ab! Itaque iure, officia rem inventore expedita vitae quos nostrum placeat magni repudiandae, impedit nam aspernatur fuga ducimus? Quod eius odio inventore earum minima corrupti est? Dolor dignissimos sint corporis cupiditate rem reiciendis, harum similique tenetur error impedit esse consequatur saepe quibusdam! Rem, deserunt aliquid iusto ducimus dolores a unde temporibus quibusdam? Officia consequatur cum odio ea!</p>
            </div>
            <div className="our-vision border-top border-1 border-primary">
              <h1 style={{fontSize:"60px"}} className="brand-color text-center mt-5">Our Vision</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A deleniti magnam, at consequatur aut voluptatem optio, in non sed quis repellat id iusto mollitia! Odio neque nam laboriosam, rerum molestiae praesentium rem dolor. Saepe voluptatum at nemo, aliquid soluta temporibus? Unde qui quae ab! Itaque iure, officia rem inventore expedita vitae quos nostrum placeat magni repudiandae, impedit nam aspernatur fuga ducimus? Quod eius odio inventore earum minima corrupti est? Dolor dignissimos sint corporis cupiditate rem reiciendis, harum similique tenetur error impedit esse consequatur saepe quibusdam! Rem, deserunt aliquid iusto ducimus dolores a unde temporibus quibusdam? Officia consequatur cum odio ea!</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;