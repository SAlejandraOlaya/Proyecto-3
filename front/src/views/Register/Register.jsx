import { useEffect, useState } from "react";
import { Button, Container, Form, Row } from 'react-bootstrap';
import validate from "../../assets/validate";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const initialData = {
    name: '',
    email: ' ',
    nDni: '',
    birthday: '',
    username: '',
    password: '',
    confirmPassword: '',
  };

  const [userData, setuserData] = useState(initialData)
  const [errors, setErrors] = useState(initialData)
  const navigate = useNavigate();

  const postData = async () => {
    try {
      const response = await axios.post('http://localhost:3000/users/register ', userData)
      console.log(response)
      alert('Registro finalizado con éxito')

    } catch (error) {
      console.log(error, "fallo al registro")
      alert('No se ha podido registrar')
    }
  }

  const handleSubmit = (event) => {
    console.log({ event });
    event.preventDefault();
    postData();
    setuserData(initialData);
    navigate("/Login");
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setuserData({
      ...userData,
      [name]: value,
    });
  }

  useEffect(() => {
    setErrors(validate(userData, errors))
  }, [userData])

  return (

    <Container className="d-flex justify-content-center">
      <div style={{ width: '70%' }}>
        <h2 className="mt-4">Crea una cuenta para disfrutar de nuestros servicios</h2>
        <Row>
          <Form onSubmit={(event) => handleSubmit(event)} className="mt-4">
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" value={userData.name} name="name" onChange={handleChange} />
              {errors?.name && <span >{errors.name}</span>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={userData.email} name="email" onChange={handleChange} />
              {errors.email && <span>{errors.email}</span>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control type='date' value={userData.birthday} name="birthday" onChange={handleChange} />
              {errors.birthday && <span>{errors.birthday}</span>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>nDni</Form.Label>
              <Form.Control type="number" value={userData.nDni} name="nDni" onChange={handleChange} />
              {errors.nDni && <span>{errors.nDni}</span>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" value={userData.username} name="username" onChange={handleChange} />
              {errors.username && <span>{errors.username}</span>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" value={userData.password} name="password" placeholder='xxxxxxxxxxxx' onChange={handleChange} />
              {errors.password && <span>{errors.password}</span>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control type="password" value={userData.confirmPassword} name="confirmPassword" placeholder='xxxxxxxxxxxx' onChange={handleChange} />
              {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
            </Form.Group>
            <div style={{ marginTop: '2rem', marginBottom: '3rem' }}>
              <Button variant="primary" type="submit" className="mt-4" disabled={errors.name || errors.email || errors.birthday || errors.nDni || errors.username || errors.password || errors.confirmPassword}>
                Enviar registro
              </Button>
            </div>
          </Form>
        </Row>
      </div>
    </Container>
  )
}


export default Register;
