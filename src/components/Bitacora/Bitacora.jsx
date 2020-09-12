import React, { useEffect } from 'react'
import './Bitacora.css'
import AddTareas from '../tareas/AddTareas'
import Tareas from '../tareas/Tareas'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Bitacora = ({ uid }) => {

    useEffect(() => {
        window.scroll(0,0)
      });

    if(!uid) return <Redirect to='/login' />

    return (
        <>  
            <div className='header-bitacora'>
                <h1>Bitacora</h1>
            </div>
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