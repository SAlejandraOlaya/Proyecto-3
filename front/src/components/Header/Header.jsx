import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import logoImage from '../../assets/logomedico.jpeg';
import './Header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/reducer'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/Inicio" className="navbar-brand">
          <img src={logoImage} width="50" height="50" className="d-inline-block align-top" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Inicio" className="navbar-brand">Inicio</Nav.Link>
            {user.name && <Nav.Link as={Link} to="/Mis turnos" className="navbar-brand">Mis turnos</Nav.Link>}
            {user.name && <Nav.Link as={Link} to="/Agendar cita" className="navbar-brand">Agendar cita</Nav.Link>}
            <Nav.Link as={Link} to="/About Us" className="navbar-brand">About Us</Nav.Link>
          </Nav>
          <Nav>
            {user.name ? (
              <>
                <span style= {{ fontSize: "24px", marginRight: "20px" }}>Bienvenid@ {user.name}  </span>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={() => {
                    dispatch(deleteUser());
                    navigate('/inicio')
                  }}
                >
                  Cerrar sesión
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/Login" className="navbar-brand">Login</Nav.Link>
                <Nav.Link as={Link} to="/Register" className="navbar-brand">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;


