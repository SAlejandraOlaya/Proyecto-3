
export const validateLogin = (input) => {
    let errors = {};
    if (!input.username) {
        errors = {
            ...errors,
            username: 'El campo usuario es necesario'
        }
    }

    if (!input.password) {
        errors = {
            ...errors,
            password: 'El campo contrasena es necesario'
        }
    }
    return errors
}

export default validateLogin;