import React, { useState } from 'react'
import '../BarraMenu/SubMenu.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom'

import { signOut } from '../../../redux/Actions/authActions'
import { connect } from 'react-redux'


const SubMenu_3 = ({ signOut, uid }) => {
    
        const [openMenuUser, setOpenMenuUser] = useState(false);
    
        const toggleMenuUser = () => {
          setOpenMenuUser(!openMenuUser);
        };
    

    if(uid) {
        return (
            <div>
                <div>
                    <button onClick={toggleMenuUser} className='user-icon'>
                            <FontAwesomeIcon className='FontAwesomeIcon-user' icon={faUser} />
                    </button>
                </div>

                {openMenuUser ? (
                    <div className=' user-menlat'>
                        <div className=' user-menuButtons'> 

                            <button onClick={toggleMenuUser}>   
                                <NavLink                   
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
                                </NavLink>                    
                            </button>

                            <button>
                                <NavLink 
                                    activeClassName='active-menulink' 
                                    className=' opciones-sideMenu'    
                                    onClick = { toggleMenuUser }
                                    to='/bitacora'> 
                                        <li> 
                                            <FontAwesomeIcon 
                                                className='FontAwesomeLateralMenu'
                                                icon={faCalendarCheck} fixedWidth/>
                                                Bitácora 
                                        </li>  
                                </NavLink>
                            </button>
                            <button>
                                <NavLink 
                                    activeClassName='active-menulink' 
                                    className=' opciones-sideMenu'    
                                    onClick = { toggleMenuUser }
                                    to='/recetarios'> 
                                        <li> 
                                            <FontAwesomeIcon 
                                                className='FontAwesomeLateralMenu'
                                                icon={faUtensils} fixedWidth/>
                                            Recetas 
                                        </li>  
                                </NavLink>
                            </button>

                            <span className='line-division' />

                            <button>
                                <NavLink 
                                    activeClassName='active-menulink' 
                                    className=' opciones-sideMenu'    
                                    onClick = { signOut }
                                    to='/login'> 
                                        <li> 
                                            <FontAwesomeIcon 
                                                className='FontAwesomeLateralMenu close-icon'
                                                icon={faSignOutAlt} fixedWidth/>
                                            Cerrar sesión 
                                        </li>  
                                </NavLink>
                            </button>

                            <button onClick={toggleMenuUser} className='btn-cerrar-userMenu'>
                                    <li> 
                                        <FontAwesomeIcon 
                                            className='FontAwesomeLateralMenu close-icon'
                                            icon={faWindowClose} fixedWidth/>
                                        Cerrar menu 
                                    </li>                                    
                            </button>

                        </div>
                        {/* </ul> */}
                    </div>
                ) : null}
            </div>
        ) 
        } else {
            return (
                <div>
                    <div>
                        <button onClick={toggleMenuUser} className='user-icon'>
                                <FontAwesomeIcon className='FontAwesomeIcon-user' icon={faUser} />
                        </button>
                    </div>

                    {openMenuUser ? (
                        <div className='user-menlat'>
                            <div className=' user-menuButtons'>   
                                
                                <button onClick={toggleMenuUser}>
                                    <NavLink 
                                        activeClassName='active-menulink' 
                                        className='link-user-menubar'
                                        to='/login'> 
                                        <li>
                                            <FontAwesomeIcon 
                                                className='FontAwesomeLateralMenu falogin'
                                                icon={faSignInAlt} fixedWidth/>
                                            Ingresar
                                        </li>   
                                    </NavLink>
                                </button>

                                <button  onClick={toggleMenuUser}>
                                    <NavLink 
                                        activeClassName='active-menulink' 
                                        className='link-user-menubar' 
                                        to='/signup'> 
                                        <li>
                                            <FontAwesomeIcon 
                                                className='FontAwesomeLateralMenu fasignup'
                                                icon={faUserPlus} fixedWidth/>
                                            Registrate
                                        </li>   
                                    </NavLink> 
                                </button>

                                <button onClick={toggleMenuUser} className='btn-cerrar-userMenu'>
                                    <li> 
                                        <FontAwesomeIcon 
                                            className='FontAwesomeLateralMenu close-icon'
                                            icon={faWindowClose} fixedWidth/>
                                        Cerrar menu 
                                    </li>                                    
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

export default connect(mapStateToProps, mapDispatchToProps)(SubMenu_3)
