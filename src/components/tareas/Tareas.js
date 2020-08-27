import React from 'react'
import './Tareas.css'
import Tarea from './Tarea'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const Tareas = ({tareas}) => {
    return (
        <div className='container-tareas'>
            <div className='box-tareas'>
                <table className="tabla-tareas">
                    <thead>
                        <tr className='titulos-tabla'>
                        <th scope="col">Alimento</th>
                        <th scope="col">Agregado</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>

                        {tareas && tareas.map((tarea) => <Tarea tarea={tarea} key={tarea.id} /> )}
                                           
                    </tbody>
                </table>                
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state)
    const tareas = state.firestore.ordered.tareas;
    return {
        tareas: tareas,
        uid: state.firebase.auth.uid
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect((ownProps) => [
        {
            collection: "tareas",
            where:["authorId", "==", ownProps.uid],
            orderBy: ["date", "desc"],
        },
    ])
)(Tareas);