import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'

import rootReducer from './redux/Reducers/rootReducer'
import thunk from 'redux-thunk'
import firebase from './services/firebaseConfig'

const store = createStore(
    rootReducer, 
    applyMiddleware(thunk.withExtraArgument({getFirebase}))
);

// const rrfConfig = { 
//     userProfile: 'users',
//     useFirestoreForProfile: true
// }

const rrfProps= {
    firebase,
    // config: rrfConfig,
    config: {},
    dispatch: store.dispatch,
    createFirestoreInstance
}

function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth);
    if (!isLoaded(auth))
        return (
            <div className='text-center'>
                <div
                    className='loader-mover'
                    style={{ width:'7rem', height: '7rem' }}
                    role= 'status'
                >
                    <span className='loader'>Loading...</span>

                </div>

            </div>
        );
    return children;
}

ReactDOM.render(
    // <React.StrictMode>
        <Provider store = {store} >
            <ReactReduxFirebaseProvider {...rrfProps}>
                <AuthIsLoaded>
                    <App />
                </AuthIsLoaded>
            </ReactReduxFirebaseProvider>
        </Provider>,
    // </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();