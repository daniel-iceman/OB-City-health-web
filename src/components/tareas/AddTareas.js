import React, { Component } from 'react'
import './AddTareas.css'
import { addTarea } from './../../redux/Actions/TareasActions'
import { connect } from 'react-redux'

class AddTareas extends Component {

    state = {
        tarea: '',
        checked: 'false'
     };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTarea(this.state);
        document.getElementById('addTareaForm').reset();
        console.log(this.state);
    };

    render() {
        return (
            <div className='container-form-tareas'>
                <div className='form-block-tareas'>
                    <form 
                        id='addTareaForm'
                        className='form-tareas' 
                        autoComplete='off'
                        onSubmit = {this.handleSubmit}
                    >
                        <legend className='form-tareas-title' >
                            {" "}
                            <h2> Alimento </h2>
                        </legend>
                        <div className='secc-form' >
                            {/* <label htmlFor="tarea">Agrega una meta</label> */}
                            <input 
                                type="text" 
                                className="input-field" 
                                placeholder='Agrega alimento...'
                                id="tarea" 
                                onChange = {this.handleChange} 
                            />                        
                        </div>
                        
                        
                        <button type="submit" className="btn-agrega-tareas">Agregar</button>
                    </form> 
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTarea: tarea => dispatch(addTarea(tarea)),
    };
};

export default connect(null, mapDispatchToProps)(AddTareas)