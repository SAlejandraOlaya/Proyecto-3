"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointment = exports.newAppointment = exports.getAppointmentId = exports.getAppointments = void 0;
const getAppointments = (req, res) => {
    res.send("Obtener listado de todos los turnos de todos los usuarios");
};
exports.getAppointments = getAppointments;
const getAppointmentId = (req, res) => {
    res.send("Obtener detalle de un turno en especifico");
};
exports.getAppointmentId = getAppointmentId;
const newAppointment = (req, res) => {
    res.send("Agendar un turno");
};
exports.newAppointment = newAppointment;
const cancelAppointment = (req, res) => {
    res.send("cambiar status del turno a 'cancelled' ");
};
exports.cancelAppointment = cancelAppointment;
