import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/logomedico.jpeg';
import './MyFooter.css';


const MyFooter = () => {
  return (
    <footer className="footer bg-light text-dark py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <img src={logo} alt="Logo" className="logoImg"/>
          </Col>
          <Col md={4}>
          <p className= "citas">Citas medicas 2024</p>
          </Col>
          <Col md={4} className="text-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/citasmedicas">
                  <FaFacebook size={24} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.twitter.com/citasmedicas">
                  <FaTwitter size={24} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/citasmedicas">
                  <FaInstagram size={24} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;