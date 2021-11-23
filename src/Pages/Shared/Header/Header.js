import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const activeStyle = {
    backgroundColor: "#0078a6",
    color: "#fff"
  }
  const {user, logOut} = useAuth();
  return (
    <div>
    {/* top part */}
      <div className="header-top brand-bg d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block">
        <Container>
          <Row>
            <Col className="pt-4 pb-3 d-flex justify-content-between" xl={12}>
              <div className="text-white">
                <span className="me-4"><i className="far fa-envelope me-2"></i>decent-healthcare@gmail.com</span>
                <span><i className="fas fa-map-marker-alt me-2"></i>4227 Mount Tabor, Monsey, New York.</span>
              </div>

              <div className="text-white fw-bold contact-phone-number">
                <span><i className="fas fa-phone-volume me-2"></i>914-59-553-4051</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* navbar part start */}
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/home" className="brand-logo"> <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/decent-healthcare/logo.png" width="80px" alt="Brand Logo" /> <span>Decent Healthcare</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="brand-bg mx-auto mb-3" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <NavLink activeStyle={activeStyle} className="navbar-link" to="/home">Home</NavLink>
            <NavLink activeStyle={activeStyle} className="navbar-link" to="/about">About</NavLink>
            <NavLink activeStyle={activeStyle} className="navbar-link" to="/services">Services</NavLink>
            <NavLink activeStyle={activeStyle} className="navbar-link" to="/contact">Contact</NavLink>
            
            {user.email && <span className="brand-color fw-bold mt-2 me-2 text-center">{user.displayName}</span>}

            {
              user.email ?
              <button onClick={logOut} className="btn btn-danger fw-bold">Logout</button>
              :
              <NavLink activeStyle={activeStyle} className="navbar-link" to="/login">Login</NavLink>}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;