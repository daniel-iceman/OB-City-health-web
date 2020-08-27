import React from 'react'
import './Tarea.css'
import moment from 'moment'
import Check from './Check'
import { removeTarea, toggleChecked } from '../../redux/Actions/TareasActions'
import { connect } from 'react-redux'


const Tarea = ({ tarea,  removeTarea, toggleChecked }) => {

    const handleRemove = (tarea) => {
        removeTarea(tarea);
    };

    const handleCheck = tarea => {
        toggleChecked(tarea);
    };

    return (        
        <>
            <tr className='tr-tarea'>
                <th>{ tarea.tarea }</th>
                <td className='big-size'>{moment(tarea.date.toDate()).calendar()}</td>
                <td className='mobile-size'>{moment(tarea.date.toDate()).subtract(10, 'days').calendar()}</td>
                <td>
                    <Check 
                        onClick = {() => handleCheck(tarea) }
                        checked = {tarea.checked}
                    />
                </td>

                <td><span 
                    className="material-icons" 
                    style={{color:'rgb(199, 198, 197)'}}
                    onClick= {() => handleRemove(tarea) }
                    >
                        delete
                    </span>
                </td>
            </tr> 
        </>    
        
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTarea: (tarea) => dispatch(removeTarea(tarea)),
        toggleChecked: (tarea) => dispatch(toggleChecked(tarea)),
    }
}


export default connect(null, mapDispatchToProps)(Tarea);
