export const validateAppointment = (input) => {
    let errors = {};
    const userIdRegex = /^[0-9]+$/;
    
    if (!userIdRegex.test(input.userIdRegex)) {
        errors = {
            ...errors,
            userIdRegex: 'campo válido solo para números'
        }
    }

    if (!input.time) {
        errors = {
            ...errors,
            time: 'Campo obligatorio. Selecciona una hora disponible'
        }
    }
    
    if (!input.date) {
        errors = {
            ...errors,
            date: 'Campo obligatorio. Selecciona una fecha disponible'
        }
    }

    if (!input.description) {
        errors = {
            ...errors,
            description: 'Campo obligatorio. Selecciona un servicio'
        }
    }

    return errors;

}

export default validateAppointment;