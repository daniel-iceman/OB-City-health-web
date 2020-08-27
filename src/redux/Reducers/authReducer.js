import { toast } from 'react-toastify'

const authReducer = (state={}, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            toast('Bienvenid@ de nuevo...');
            return state;
        case 'SIGN_IN_ERR':
            toast.error('Error al ingresar...');
            return state;
        case 'SIGN_OUT':
            toast.dark('Has cerrado sesión');
            return state;
        case 'SIGN_UP':
            toast.info('Bienvenid@...');
            return state;
        case 'SIGN_UP_ERR':
            toast.error('Error al suscribirse...');
            return state;
        default:
            return state;
    }
};

export default authReducer