import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AboutUsLab from "../../assets/AboutUsLab.jpeg"
import Aboutusmedica from "../../assets/Aboutusmedica.jpeg"
import AboutUsodontologia from "../../assets/AboutUsodontologia.jpeg"

const AboutUs = () => {
  return (
    <Container fluid className="py-5">
      <h2 className="text-center mb-5" style={{ fontSize: '3rem' }}>Acerca de Nosotros</h2>
      <Row>
        <Col lg={4} className="mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src={Aboutusmedica} />
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>Citas con Médico General</Card.Title>
              <Card.Text style={{ fontSize: '1.2rem' }}>
                Ofrecemos citas con médicos generales altamente capacitados para atender sus necesidades de salud primaria. Nuestros profesionales están dedicados a brindar un servicio de calidad y personalizado.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className="mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src={AboutUsodontologia}/>
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>Citas con Odontólogos</Card.Title>
              <Card.Text style={{ fontSize: '1.2rem' }}>
                Nuestro equipo de odontólogos especializados está listo para cuidar de su salud dental. Ofrecemos una amplia gama de servicios odontológicos, desde limpiezas dentales hasta tratamientos más complejos. Su sonrisa es nuestra prioridad.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className="mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src={AboutUsLab} />
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>Exámenes de Laboratorio</Card.Title>
              <Card.Text style={{ fontSize: '1.2rem' }}>
                Realizamos una amplia variedad de exámenes de laboratorio para ayudar en el diagnóstico y seguimiento de diversas condiciones de salud. Nuestro laboratorio está equipado con tecnología de última generación y un equipo de profesionales altamente capacitados.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;