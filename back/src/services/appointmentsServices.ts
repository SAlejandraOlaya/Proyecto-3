import IAppointment from "../interfaces/IAppointments";
import {IAppointmentScheduleDto } from "../dto/appointmentScheduleDto"
import { appointmentModel, userModel } from "../config/data-source";
import { Appointment } from "../entities/appointmentsEntity";
import { User } from "../entities/userEntity";


//Implementar una función que pueda retornar el arreglo completo de turnos.

let appointments: IAppointment[] = []


export const getAllAppointmentsService = async (): Promise< Appointment []> => {
   const getAppointments: Appointment [] = await appointmentModel.find(); // Await the promise
    return getAppointments ;
  };

  
//Implementar una función que pueda obtener el detalle de un turno por ID.

export const getAppointmentIdService = async (id: number): Promise<Appointment | null> => {

    const findAppointment: Appointment  | null = await appointmentModel.findOne({where: {id}})

    if (!findAppointment) throw Error ("NO existe la cita")
    return findAppointment;
    };
   

// Implementar una función que pueda crear un nuevo turno, siempre guardando, además, 
// el ID del usuario que ha creado dicho turno. 
// NO PUEDE HABER UN TURNO SIN ID DE USUARIO. 

export const newAppointmentService = async (scheduleParams: IAppointmentScheduleDto): Promise <Appointment> => {
    const {date, time, userId, description} = scheduleParams;
    const user: User | null = await userModel.findOneBy({id:userId})
    if (!user) throw Error ("Usuario no existe")

    const newAppointment: Appointment = await appointmentModel.create(scheduleParams)
    newAppointment.user = user 

    await appointmentModel.save(newAppointment);
    return newAppointment
    
}



//Implementar una función que reciba el id de un turno específico
//y una vez identificado el turno correspondiente, cambiar su estado a “cancelled”.

export const changeStatusService = async (id: number): Promise<Appointment | undefined> => {
    const updatedStatus = await appointmentModel.findOne({where: {id}})
  if (!updatedStatus){
    throw Error ("No existe la cita")
  } else {
    updatedStatus.status = "canceled"
    await appointmentModel.save(updatedStatus)
    return updatedStatus
  }
}


