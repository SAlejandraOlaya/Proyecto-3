import { useEffect, useState } from "react";
import { Button, Container, Form, Row } from 'react-bootstrap';
import { getMinDate, getMaxDate } from '../../assets/dateUtils';
import { validateAppointment } from "../../assets/validateAppointment.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './newAppointment.css'
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from '../../.env';

export const NewAppointment = () => {
    const user = useSelector((state) => state.user);

    const initialData = {
        date: '',
        time: '',
        description: '',
    }

    const [appointment, setAppointment] = useState(initialData)
    const [errors, setErrors] = useState(initialData)
    const navigate = useNavigate();

    const postAppointment = async () => {
        const payload = { ...appointment, userId: user.id }
        try {
            const response = await axios.post(`${API_URL}/appointments/schedule`, payload)
            console.log(response)
            alert('Turno agendado con éxito')

        } catch (error) {
            console.log(error, "fallo al registro")
            alert('No se ha podido agendar el turno')
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        postAppointment();
        setAppointment(initialData);
        navigate('/Mis turnos');


    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAppointment({
            ...appointment,
            [name]: value,
        });
    };

    useEffect(() => {
        setErrors(validateAppointment(appointment, errors))
    }, [appointment]);

    const isWeekDay = (date) => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };

    return (

        <Container className="d-flex justify-content-center">
            <div style={{ width: '60%' }}>
                <h2 className="mt-4">Llena el siguiente formulario para agendar un turno</h2>
                <Row>
                    <Form onSubmit={(event) => handleSubmit(event)} className="mt-4">
                        <Form.Group className="mb-3">
                            <Form.Label>Fecha</Form.Label>
                            <div className="date-picker-container">
                                <DatePicker
                                    selected={appointment.date ? new Date(appointment.date) : null}
                                    onChange={(date) => setAppointment({ ...appointment, date: date })}
                                    minDate={new Date()}
                                    maxDate={new Date(getMaxDate())}
                                    filterDate={isWeekDay}
                                    dateFormat="dd/MM/yyyy"
                                    className="form-control"
                                    placeholderText="Seleccione una fecha"
                                />
                            </div>
                            {errors?.date && <span>{errors.date}</span>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Hora</Form.Label>
                            <Form.Select value={appointment.time} name="time" onChange={handleChange}>
                                <option value="">Seleccionar hora</option>
                                <option value="07:00">07:00</option>
                                <option value="07:30">07:30</option>
                                <option value="08:00">08:00</option>
                                <option value="08:30">08:30</option>
                                <option value="09:00">09:00</option>
                                <option value="09:30">09:30</option>
                                <option value="10:00">10:00</option>
                                <option value="10:30">10:30</option>
                                <option value="11:00">11:00</option>
                                <option value="11:30">11:30</option>
                                <option value="12:00">12:00</option>
                                <option value="12:30">12:30</option>
                                <option value="13:00">13:00</option>
                                <option value="13:30">13:30</option>
                                <option value="14:00">14:00</option>
                                <option value="14:30">14:30</option>
                                <option value="15:00">15:00</option>
                                <option value="15:30">15:30</option>
                                <option value="16:00">16:00</option>
                                <option value="16:30">16:30</option>
                                <option value="17:00">17:00</option>
                                <option value="17:30">17:30</option>
                                <option value="18:00">18:00</option>
                                <option value="18:30">18:30</option>
                            </Form.Select>
                            {errors.time && <span>{errors.time}</span>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Servicio a solicitar</Form.Label>
                            <Form.Select
                                value={appointment.description}
                                name="description"
                                onChange={handleChange}
                            >
                                <option value="">Seleccionar servicio</option>
                                <option value="Cita con medicina general">Citas con medicina general</option>
                                <option value="Cita para exámenes de laboratorio">Cita para exámenes de laboratorio</option>
                                <option value="Cita para odontología">Cita para odontología</option>
                            </Form.Select>
                            {errors.description && <span>{errors.description}</span>}
                        </Form.Group>

                        <div style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                            <Button variant="primary" type="submit" disabled={errors.date || errors.time || errors.userId || errors.description}>
                                Agendar cita
                            </Button>
                        </div>
                    </Form>
                </Row>
            </div>
        </Container>
    );

};

export default NewAppointment;