import { useEffect, useState } from "react";
import { Appointment } from "../../components/Appointment/Appointment"
import axios from 'axios'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUserAppointments } from "../../redux/reducer"


const MyAppointments = () => {


  const user = useSelector((state) => state.user);
  const appointments = useSelector((state) => state.userAppointments);
  const dispatch = useDispatch();
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetcData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/users/${user.id}`);
        dispatch(setUserAppointments(response.data.appointments))
        console.log(response.data.appointments);
      } catch (error) {
        console.log('error al obtener los datos', error)
      }
    };
    user.name && fetcData();
  }, [])

  return (

    <div>
      <h3 style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
        Actualmente estos son tus turnos agendados
      </h3>
      <container style={{ margin: '0 auto', maxWidth: '960px' }}>
        <div>
          {!appointments.length ? (
            <div>Por el momento no tienes ningún turno agendado</div>
          ) : (
            appointments.map((appointment) => (
              <Appointment
                key={appointment.id}
                time={appointment.time}
                date={appointment.date}
                description={appointment.description}
                status={appointment.status}
                id={appointment.id}
              />
            ))
          )}
        </div>
        {/* Condición para mostrar el párrafo solo si hay turnos */}
        {appointments.length > 0 && (
          <p className="mt-4 text-center">
            <em style={{ fontStyle: 'italic', fontSize: 'large', marginTop: '2rem', marginBottom: '4rem' }}>
              Recuerda que para cancelar una cita debe ser hasta el día anterior de la fecha de la reserva, después de eso no podrás cancelar tu turno.
            </em>
          </p>
        )}
      </container>
    </div>
  );

}
export default MyAppointments;




