import React, { useEffect }  from 'react'
import './Recetarios.css'
import ListaRecetarios from './ListaRecetarios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'



const Recetarios = ({ uid }) => {

    useEffect(() => {
        window.scroll(0,0)
      });

    if(!uid) return <Redirect to='/login' />
    return (
        <div>
            <ListaRecetarios />            
        </div>
    )
}

const mapStateToProps = state => {
    const uid = state.firebase.auth.uid;
    return {
        uid: uid,
    };
};


export default connect(mapStateToProps)(Recetarios)