import { useState, useEffect } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap"
import validateLogin from "../../assets/validateLogin.js";
import axios from "axios";
import { setUser } from "../../redux/reducer.js";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const loginData = {
    username: '',
    password: '',
  };
  const [login, setLogin] = useState(loginData)
  const [errors, setErrors] = useState(loginData)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const postLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/users/login', login)
      console.log(response)
      alert('Inicio de sesión exitoso')
      dispatch(setUser(response.data.user))
      navigate("/Inicio")

    } catch (error) {
      console.log(error, "fallo al ingreso")
      alert('No se pudo iniciar sesión')
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    postLogin();
    setLogin(loginData)

  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogin({
      ...login,
      [name]: value,
    });
  }
  useEffect(() => {
    setErrors(validateLogin(login, errors))
  }, [login])


  return (
    <Container className="d-flex justify-content-center">
      <div style={{ width: '50%' }}>
        <h2 className="mt-4 text-center">Inicia sesión</h2>
        <Row>
          <Form onSubmit={(event) => handleSubmit(event)} className="mt-4">
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" value={login.username} name="username" onChange={handleChange} />
              {errors?.username && <span>{errors.username}</span>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" value={login.password} name="password" onChange={handleChange} />
              {errors?.password && <span>{errors.password}</span>}
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4" disabled={errors.username || errors.password}>
              Iniciar sesión
            </Button>
          </Form>
        </Row>
        <Row className="mt-4" style={{ marginBottom: '1rem' }}>
          <Col>
            <p style={{ marginBottom: '0.5rem' }}>¿No tienes una cuenta?</p>
            <Link to="/Register">
              <Button variant="secondary">Regístrate</Button>
            </Link>
          </Col>
        </Row>

      </div>
    </Container>
  );
};
export default Login;