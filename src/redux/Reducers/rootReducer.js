import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import tareaReducer from './tareaReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    tarea: tareaReducer,
    auth: authReducer
})

export default rootReducer