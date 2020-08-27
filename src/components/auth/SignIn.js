import React, { Component } from 'react'
import './auth.css'
import { Link } from 'react-router-dom'
import { signIn } from '../../redux/Actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {

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
        this.props.signIn(this.state);
    };

    render() {

        const { uid } = this.props;
            if(uid) return <Redirect to='/dashboard' />

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
                                <h2> Iniciar sesión </h2>
                            </legend>
                        </div>

                        <div className='secc-form' >
                            {/* <label htmlFor="email">Ingresa correo electrónico</label> */}
                            <input 
                                type="email" 
                                className="input-field" 
                                id="email" 
                                onChange = {this.handleChange} 
                                placeholder = 'Correo electrónico...'
                            />                        
                        </div>
                        <div className='secc-form'>
                            {/* <label htmlFor="password">Ingresa contraseña</label> */}
                            <input 
                                type="password" 
                                className="input-field" 
                                id="password"
                                onChange = {this.handleChange}
                                placeholder = 'Contraseña...'
                            />
                        </div>
                        
                        <button type="submit" className="btn-sign">Ingresar</button>

                        <div className='no-registrado'>
                            <p>¿No esta registrado?</p>
                            <Link 
                                className='link-user-menubar'
                                to='/signup'> 
                                <li>
                                    Crear una cuenta
                                </li>   
                            </Link>

                        </div>
                    </form> 
                </div>
            </div>
        );
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
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)






// ************************ ESTE ES EL METODO DEL VIDEO DE MARIO BROS ************************

// import React, { Component } from 'react'
// import './auth.css'

// class SignIn extends Component {

//     state = {
//         email: '',
//         password: ''
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
//                     <form onSubmit={ this.handleSubmit } className='form-auth sign-in-form' >
//                         <h5 className='form-auth-title'>
//                             Sign In
//                         </h5>
//                         <div className='input-field'>
//                             <label htmlFor='email'> Email </label>
//                             <input type='email' id='email' onChange={ this.handleChange } />
//                         </div>
//                         <div className='input-field'>
//                             <label htmlFor='password'> Password </label>
//                             <input type='password' id='password' onChange={ this.handleChange } />
//                         </div>
//                         <div className='input-field'>
//                             <button className='btn-sign'> Login </button>
//                         </div>
//                     </form>              
//                 </div>
//             </div>
//         )
//     }
// }

// export default SignIn

