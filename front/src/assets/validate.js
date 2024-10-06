
export const validate = (input) => {
    let errors = {};
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nDniRegex = /^[1-9]\d{6,10}$/;
    const usernameRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d._-]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!emailRegex.test(input.email)) {
        errors = {
            ...errors,
            email: 'Ingresa un email válido'
        }
    }

    if (!nameRegex.test(input.name)) {
        errors = {
            ...errors,
            name: 'El nombre debe iniciar con mayúscula'
        }

    }
    if (!input.birthday) {
        errors = {
            ...errors,
            birthday: 'La fecha de nacimiento es obligatoria'
        }
    }

    if (!nDniRegex.test(input.nDni)) {

        errors = {
            ...errors,
            nDni: 'Cédula de ciudadanía no válida'
        }
    }

    if (!usernameRegex.test(input.username)) {
        errors = {
            ...errors,
            username: 'El nombre de usuario debe contener al menos una letra mayúscula y un número'
        }
    }

    if (!passwordRegex.test(input.password)) {
        errors = {
            ...errors,
            password: 'la contraseña debe contener al menos 6 caracteres, entre ellos letras y números'
        }
    }
    if (input.password !== input.confirmPassword) {
        errors = {
            ...errors,
            confirmPassword: 'Las contraseñas no coinciden'
        };
    }

    return errors

}

export default validate;