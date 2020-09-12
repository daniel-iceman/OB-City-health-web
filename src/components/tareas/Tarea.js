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
                <th className='food-eat'>{ tarea.tarea }</th>
                {/* <td className='big-size'>{moment(tarea.date.toDate()).calendar()}</td> */}
                
                <td className='calendar-big-size'>{moment(tarea.date.toDate()).format('lll')}</td>
                <td className='thumb'>
                    <Check 
                        onClick = {() => handleCheck(tarea) }
                        checked = {tarea.checked}
                    />
                </td>

                <td className='trash'><span 
                    className="material-icons" 
                    // style={{color:'#d8d3cd'}}
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
