import React, { Component } from 'react'
import './CreateProject.css'
import { connect } from 'react-redux'
import { createProject } from './../../redux/store/actions/projectActions'

class CreateProject extends Component {

    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state)
    }

    render() {
        return (
            <div className='container-form-post'>
                <div className='form-block-post'>
                    <form onSubmit={ this.handleSubmit } className='form-post' >
                        <h5 className='form-post-title'>
                            Post on OB City health
                        </h5>
                        <div className='input-field input-size'>
                            <label htmlFor='title'> Título </label>
                            <input type='text' id='title' onChange={ this.handleChange } />
                        </div>
                        <div className='input-field textarea-size'>
                            <label htmlFor='content'> Contenido </label>
                            <textarea 
                                id='content'
                                // className='text-area-post'
                                // className='textarea-post'
                                onChange={ this.handleChange }
                                placeholder='Ingrese su contenido...'
                            ></textarea>
                        </div>
                        <div className='input-field'>
                            <button className='btn-post-on'> Publicar </button>
                        </div>
                    </form>              
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject)