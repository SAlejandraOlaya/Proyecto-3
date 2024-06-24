import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import medicos from '../../assets/medicos.jpeg'
import medicinageneral from "../../assets/medicinageneral.jpeg"
import laboratorio from "../../assets/laboratorio.jpeg"
import odontologia from "../../assets/odontologia.jpeg"
import './Home.css'
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={6}>
          <h1>Bienvenido a nuestra aplicación de citas médicas</h1>
          <p className="texto">Agenda tus citas médicas de forma rápida y sencilla. </p>
          <p className="texto"> Solo debes registrarte en nuestra pagina web, iniciar sesión y ya estas listo para disfrutar de nuestros servicios.</p>
          <Link to="/Login">
            <Button variant="primary" size="lg">
              Agendar cita
            </Button>
          </Link>
        </Col>
        <Col md={6}>
          <img
            src={medicos}
            alt="Doctor"
            className="doctor-image"
          />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={12}>
          <h2>Nuestros servicios</h2>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <div className="service-card">
            <img src={medicinageneral} alt="Service 1" className="img-fluid" />
            <h3>Consulta medicina general</h3>
            <p>Agenda consultas con cualquiera de nuestros médicos generales.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="service-card">
            <img src={laboratorio} alt="Service 2" className="img-fluid" />
            <h3>Exámenes de laboratorio</h3>
            <p>Programa tus exámenes de laboratorio.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="service-card">
            <img src={odontologia} alt="Service 3" className="img-fluid" />
            <h3> Consulta Odontologica</h3>
            <p>Agenda tu cita con nuestros odontólogos.</p>
          </div>
        </Col>
      </Row>


    </Container>
  );
};

export default Home;




