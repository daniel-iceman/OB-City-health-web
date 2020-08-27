import {toast} from 'react-toastify'

const tareaReducer = (state= {}, action) => {
    switch(action.type) {
        case 'ADD_TAREA': {
            toast.success('Alimento agregado')
            return state
        }
        case 'ADD_TAREA_ERR': {
            toast.error('Ocurrió un error...')
            return state
        }
        case 'REMOVE_TAREA': {
            toast.warn('Alimento eliminado')
            return state
        }
        case 'REMOVE_TAREA_ERR': {
            toast.error('Ocurrió un error al eliminar...')
            return state
        }
        case 'TOGGLE_CHECKED': {
            toast.info('Su calificación ha cambiado...')
            return state
        }
        case 'TOGGLE_CHECK_ERR': {
            toast.error('Ocurrió un error al cambiar calificación...')
            return state
        }
        default:
            return state
    }
};

export default tareaReducer;