import { Request, Response } from "express";
import { getAllAppointmentsService, newAppointmentService, getAppointmentIdService, changeStatusService } from "../services/appointmentsServices"
import { Appointment } from "../entities/appointmentsEntity";

export const getAppointments = async (req: Request, res: Response) => {
    try {
        const appointments: Appointment[] = await getAllAppointmentsService();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(400).json({
            error: 'Actualmente no se encontraron turnos'
        });
    }

};

export const getAppointmentId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const appointment = await getAppointmentIdService(Number(id));
        res.status(200).json(appointment);
    } catch (error: any) {
        res.status(400).json({
            error: "error al encontrar turno"
        });
    }
};

export const createAppointment = async (req: Request, res: Response) => {
    const { date, time, userId, description } = req.body
    try {
        const newAppointment = await newAppointmentService({ date, time, userId, description });
        res.status(201).json(newAppointment);
    } catch (error: any) {
        res.status(400).send("datos incorrectos")

    }

}

export const cancelAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const appointment = await changeStatusService(Number(id));
        res.status(200).json(appointment);
    } catch (error: any) {
        res.status(400).json({
            error: "El turno no fue encontrad"
        })
    }
};

