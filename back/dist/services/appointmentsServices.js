"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAppointments = void 0;
//Implementar una función que pueda retornar el arreglo completo de turnos.
const appointments = [];
const getAllAppointments = () => {
    return appointments;
};
exports.getAllAppointments = getAllAppointments;
//Implementar una función que pueda obtener el detalle de un turno por ID.
//Implementar una función que pueda crear un nuevo turno, siempre guardando, 
// además, el ID del usuario que ha creado dicho turno.
// NO PUEDE HABER UN TURNO SIN ID DE USUARIO. 
//Implementar una función que reciba el id de un turno específico
//y una vez identificado el turno correspondiente, cambiar su estado a “cancelled”.
