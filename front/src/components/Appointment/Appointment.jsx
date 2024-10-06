import './Appointment.css';
import { Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { cancelAppointment } from "../../redux/reducer"
import axios from 'axios';
import { API_URL } from '../../.env';

const Appointment = ({ id, date, time, status, description }) => {
  const statusClass = status === 'active' ? 'status-active' : 'status-canceled';
  const isCanceled = status === 'canceled';
  const dispatch = useDispatch();

  const putAppointment = async () => {
    try {
      const response = await axios.put(`${API_URL}/appointments/cancel/${id}`);
      console.log(response)
      dispatch(cancelAppointment(id))
    } catch (error) {
      console.log('error al cancelar turno', error)
    }
  }
  const handleCancel = () => {
    putAppointment();
  }
  const appointmentDate = new Date(date);
  const currentDate = new Date();
  const timeDiff = appointmentDate.getTime() - currentDate.getTime();
  const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
  const canCancel = hoursDiff > 24;

  return (
    <div className="My-Appointments">
      <Col className="text-center mt-3">
        <h4>Fecha: {date && new Date(date)?.toLocaleDateString()}</h4>
      </Col>
      <Col className="text-center mt-3">
        <h4>Hora: {time}</h4>
      </Col>
      <Col className="text-center mt-3">
        <h4 className={`status ${statusClass}`}>{status.toUpperCase()}</h4>
      </Col>
      <Col className="text-center mt-3">
        <h4>{description}</h4>
      </Col>
      <Col className="text-center mt-3">
        <Button
          onClick={handleCancel}
          variant="primary"
          disabled={isCanceled || !canCancel}
        >
          Cancelar turno
        </Button>
      </Col>
    </div>
  );
};

export { Appointment };