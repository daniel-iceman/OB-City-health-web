import React from 'react'
import AddTareas from '../tareas/AddTareas'
import Tareas from '../tareas/Tareas'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Bitacora = ({ uid }) => {

    if(!uid) return <Redirect to='/login' />

    return (
        <>
            <AddTareas />
            <Tareas />
        </>
    )
}


const mapStateToProps = state => {
    const uid = state.firebase.auth.uid;
    return {
        uid: uid,
    };
};

// const mapDispatchToProps = {
    
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

export default connect(mapStateToProps)(Bitacora)