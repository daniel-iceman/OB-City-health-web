import React, { Component } from 'react'
import './auth.css'
import { signUp } from '../../redux/Actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import SwitchPolicies from './switchPolicies'
import { Link } from 'react-router-dom'

class SignUp extends Component {

    state = {
        email: '',
        password: '',
        
     };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.signUp(this.state);
    };

    render() {

        const { uid } = this.props;
        if (uid) return <Redirect to='/dashboard' />

        return (
            <div className='container-form-auth'>
                <div className='form-block'>
                    <form 
                        className='form-auth' 
                        autoComplete='off'
                        onSubmit = {this.handleSubmit}
                    >
                        <div className='cont-auth-title'>
                            <legend className='form-auth-title' >
                                {" "}
                                <h2> Registrate </h2>
                            </legend>
                        </div>

                        {/* <div className='secc-form'>
                             <input 
                                type='text' 
                                className="input-field" 
                                id='firstName' 
                                onChange={ this.handleChange } 
                                placeholder = 'Nombre'
                            />
                         </div>
                         <div className='secc-form'>
                             <input 
                                type='text' 
                                className="input-field" 
                                id='lastNameF' 
                                onChange={ this.handleChange } 
                                placeholder = 'Apellido paterno'
                            />
                         </div>
                         <div className='secc-form'>
                             <input 
                                type='text' 
                                className="input-field" 
                                id='lastNameM' 
                                onChange={ this.handleChange } 
                                placeholder = 'Apellido materno'
                            />
                         </div> */}

                        <div className='secc-form' >
                            
                            <input 
                                type="email" 
                                className="input-field" 
                                id="email" 
                                onChange = {this.handleChange} 
                                placeholder = 'email'
                            />                        
                        </div>
                        <div className='secc-form'>
                            
                            <input 
                                type="password" 
                                className="input-field" 
                                id="password"
                                onChange = {this.handleChange}
                                placeholder = 'contraseña'
                            />
                        </div>

                        <div className='politicas-privacidad'>
                            <a href='https://myappterms.com/reader.php?id=100'>
                                Política de privacidad
                            </a>
                            <SwitchPolicies/>
                        </div>

                        <button type="submit" className="btn-sign">Enviar</button>

                        <div className='cuenta-existente'>                            
                            <Link   to='/login' >
                                <li> 
                                    Usar cuenta existente
                                </li>
                            </Link>
                        </div>                        
                        
                    </form> 
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    const uid = state.firebase.auth.uid
    return {
        uid: uid
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signUp: (creds) => dispatch(signUp(creds)),
    };
};
// const mapDispatchToProps = (dispatch) => {
//     return{
//         signUp: (creds) => dispatch(signUp(creds)),
//     };
// };

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)







// ************************ ESTE ES EL METODO DEL VIDEO DE MARIO BROS ************************


// import React, { Component } from 'react'
// import './auth.css'

// class SignUp extends Component {

//     state = {
//         email: '',
//         password: '',
//         firstName: '',
//         lastNameF: '',
//         lastNameM: ''
//     }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.id]: e.target.value
//         })
//     }
//     handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(this.state)
//     }

//     render() {
//         return (
//             <div className='container-form-auth'>
//                 <div className='form-block'>
//                     <form onSubmit={ this.handleSubmit } className='form-auth sign-up-form' >
//                         <h5 className='form-auth-title'>
//                             Sign Up
//                         </h5>
//                         <div className='input-field'>
//                             <label htmlFor='firstName'> Nombre </label>
//                             <input type='text' id='firstName' onChange={ this.handleChange } />
//                         </div>
//                         <div className='input-field'>
//                             <label htmlFor='lastNameF'> Apellido Paterno </label>
//                             <input type='text' id='lastNameF' onChange={ this.handleChange } />
//                         </div>
//                         <div className='input-field'>
//                             <label htmlFor='lastNameM'> Apellido Materno </label>
//                             <input type='text' id='lastNameM' onChange={ this.handleChange } />
//                         </div>
//                         <div className='input-field'>
//                             <label htmlFor='email'> Email </label>
//                             <input type='email' id='email' onChange={ this.handleChange } />
//                         </div>
//                         <div className='input-field'>
//                             <label htmlFor='password'> Password </label>
//                             <input type='password' id='password' onChange={ this.handleChange } />
//                         </div>
//                         <div className='input-field'>
//                             <button className='btn-sign'> Registrate </button>
//                         </div>
//                     </form>              
//                 </div>
//             </div>
//         )
//     }
// }

// export default SignUp