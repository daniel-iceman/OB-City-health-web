import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './MobileLateralMenu.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { faUserMd } from "@fortawesome/free-solid-svg-icons";
import { faFileMedical } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { signOut } from '../../../redux/Actions/authActions'
import { connect } from 'react-redux'


const MobileLateralMenu = ({ signOut, uid }) => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
      setOpenMenu(!openMenu);
    };

    if(uid) {
        return (
            <div>
                <div className='burger-btn'>
                    <button onClick={toggleMenu}>              
                    
                        <FontAwesomeIcon  
                            className='burgerBoy'                   
                            icon={faBars} 
                            style={{
                                marginRight:'0px', 
                                marginTop:'0px', 
                                background:'white',
                                }} />
                    </button>
                </div>

                {openMenu ? (
                    <div className="menlat" >
                        <header>MENÚ</header>

                        <div className='menuButtons'>

                            <button onClick={toggleMenu}>   
                                <Link                   
                                    exact    
                                    className='opciones-sideMenu' 
                                    to='/dashboard'
                                    >                                                               
                                    <li className='dashboard-list'>                         
                                        <span
                                            className='material-icons dashboard-icon'
                                            style={{ cursor:'pointer'}}
                                        >
                                            dashboard
                                        </span>
                                        <h5>Panel central</h5>
                                    </li>
                                </Link>                    
                            </button>

                            <button onClick={toggleMenu}>   
                                <Link                   
                                    exact    
                                    className='opciones-sideMenu' 
                                    to='/'
                                    >                                                               
                                    <li >                           
                                        <FontAwesomeIcon                          
                                        className='FontAwesomeLateralMenu faHome' 
                                        icon={faHome} fixedWidth />
                                        Inicio
                                    </li>
                                </Link>                    
                            </button>

                            <button onClick={toggleMenu}>   
                                <Link  
                                    className='opciones-sideMenu' 
                                    to='/servicios'>
                                    <li>
                                        <FontAwesomeIcon 
                                            className='FontAwesomeLateralMenu' 
                                            icon={faStethoscope} fixedWidth/>
                                        Servicios
                                    </li>
                                </Link>                    
                            </button>

                            <button onClick={toggleMenu}>   
                                <Link 
                                    className='opciones-sideMenu' 
                                    to='/acerca'>
                                    <li>
                                        <FontAwesomeIcon 
                                            className='FontAwesomeLateralMenu' 
                                            icon={faUserMd} fixedWidth />
                                        Acerca de
                                    </li>
                                </Link>                    
                            </button>

                            <button onClick={toggleMenu}>   
                                <Link 
                                    className='opciones-sideMenu' 
                                    to='/articulos'>
                                    <li>
                                        <FontAwesomeIcon 
                                            className='FontAwesomeLateralMenu faArt'
                                            icon={faFileMedical} fixedWidth />
                                        Artículos
                                    </li>
                                </Link>                    
                            </button>

                            <button onClick={toggleMenu}>   
                                {/* <Link  
                                    className='opciones-sideMenu' 
                                    to='/contacto'>
                                    <li>
                                        <FontAwesomeIcon 
                                            className='FontAwesomeLateralMenu'
                                            icon={faPhoneAlt} fixedWidth/>
                                        Contacto
                                    </li>
                                </Link> */}  
                                <li
                                    style={{listStyle:'none'}}>
                                        <FontAwesomeIcon 
                                            className='FontAwesomeLateralMenu'
                                            icon={faPhoneAlt} fixedWidth/>
                                    <a 
                                        style={{color:'white', textDecoration:'none'}}
                                        target="_blank" 
                                        href="https://www.obcity.store/contacto-ob-city-web/">
                                        Contacto
                                    </a>
                                </li>                  
                            </button>

                            <span className='line-division' />

                            <button onClick = { signOut }>
                                <Link 
                                    className='opciones-sideMenu'                                       
                                    to='/login'> 
                                    <li>
                                        <FontAwesomeIcon 
                                            className='FontAwesomeLateralMenu'
                                            icon={faSignOutAlt} fixedWidth/>
                                        Cerrar sesión
                                    </li>  
                                </Link>
                            </button>
                        </div>

                    </div>
                ) : null}

            </div>
        )
    }else {
        return (
            <div>
                <div className='burger-btn'>
                    <button onClick={toggleMenu}>              
                    
                        <FontAwesomeIcon  
                            className='burgerBoy'                   
                            icon={faBars} 
                            style={{
                                marginRight:'0px', 
                                marginTop:'0px', 
                                background:'white',
                                }} />
                    </button>
                </div>

                {openMenu ? (
                    <div className="menlat" >
                        <header>MENÚ</header>

                        <div className='menuButtons'>

                            <button onClick={toggleMenu}>   
                                <Link                   
                                    exact    
                                    className='opciones-sideMenu' 
                                    to='/'
                                    >                                                               
                                    <li >                           
                                        <FontAwesomeIcon                          
                                        className='FontAwesomeLateralMenu faHome' 
                                        icon={faHome} fixedWidth />
                                        Inicio
                                    </li>
                                </Link>                    
                            </button>

                            <button onClick={toggleMenu}>   
                                <Link  
                                    className='opciones-sideMenu' 
                                    to='/servicios'>
                                    <li>
                                        <FontAwesomeIcon 
                                            className='FontAwesomeLateralMenu' 
                                            icon={faStethoscope} fixedWidth/>
                                        Servicios
                                    </li>
                                </Link>                    
                            </button>

                            <button onClick={toggleMenu}>   
                                <Link 
                                    className='opciones-sideMenu' 
                                    to='/acerca'>
                                    <li>
                                        <FontAwesomeIcon 
                                            className='FontAwesomeLateralMenu' 
                                            icon={faUserMd} fixedWidth />
                                        Acerca de
                                    </li>
                                </Link>                    
                            </button>

                            <button onClick={toggleMenu}>   
                                <Link 
                                    className='opciones-sideMenu' 
                                    to='/articulos'>
                                    <li>
                                        <FontAwesomeIcon 
                                            className='FontAwesomeLateralMenu faArt'
                                            icon={faFileMedical} fixedWidth />
                                        Artículos
                                    </li>
                                </Link>                    
                            </button>                            

                            <button onClick={toggleMenu}>
                                    <Link 
                                        className='opciones-sideMenu'
                                        to='/login'> 
                                        <li>
                                            <FontAwesomeIcon 
                                                className='FontAwesomeLateralMenu falogin'
                                                icon={faSignInAlt} fixedWidth/>
                                            Inicio sesión
                                        </li> 
                                    </Link>
                            </button>

                            <button  onClick={toggleMenu}>
                                <Link 
                                    className='opciones-sideMenu' 
                                    to='/signup'> 
                                        <li>
                                            <FontAwesomeIcon 
                                                className='FontAwesomeLateralMenu fasignup'
                                                icon={faUserPlus} fixedWidth/>
                                            Registrate
                                        </li> 
                                </Link> 
                            </button>

                            <button onClick={toggleMenu}>   
                                <Link  
                                    className='opciones-sideMenu' 
                                    to='/contacto'>
                                    <li>
                                        <FontAwesomeIcon 
                                            className='FontAwesomeLateralMenu'
                                            icon={faPhoneAlt} fixedWidth/>
                                        Contacto
                                    </li>
                                </Link>                    
                            </button>

                        </div>

                    </div>
                ) : null}

            </div>
        );
    }
};

const mapStateToProps = state => {
    const uid = state.firebase.auth.uid
    return {
        uid: uid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MobileLateralMenu)            
            
            



