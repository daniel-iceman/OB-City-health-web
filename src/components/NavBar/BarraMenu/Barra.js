import React, { useState } from 'react'
import './BarraMenu.css'
import '../../Images/OBC.PNG'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser, faCommentMedical } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux'

import SubMenu1 from '../SubMenu_1/SubMenu_1'
import SubMenu2 from '../SubMenu_2/SubMenu_2';
//import SubMenu3 from '../SubMenu_3/SubMenu_3';
import LateralMenu from '../LateralMenu/LateralMenu';

function Barra() {
    // SUBMENU 1
    const [nombreSubmenu1] = useState('Servicios')
    const [serviciosOpcion1] = useState ('Consultas online y presencial')
    const [serviciosOpcion2] = useState ('Sistemas que manejamos')
    const [serviciosOpcion3] = useState ('Tienda Online')
    const [serviciosOpcion4] = useState ('Aplicación Móvil')
    const [serviciosOpcion5] = useState ('Recetarios')
    const [serviciosOpcion6] = useState ('Pregunte al experto')
    const [serviciosOpcion7] = useState ('Blog')
    const [serviciosOpcion8] = useState ('PRISE')

    // SUBMENU 2
    const [nombreSubmenu2] = useState('Acerca de')
    const [acercaDeOpcion1] = useState ('Curriculum')
    const [acercaDeOpcion2] = useState ('Artículos publicados')

        
    return (
       
        <div className='container-barraMenu'>
            <div className='posicion-barraMenu'>
                <div className='barraMenu'>
                    <div className='container-boton-menu-lateral'>
                        <LateralMenu />
                    </div>
                    <div className="barraMenu_logo">
                        <a href ="/"> <img src={require('../../Images/OBCwhiteMedium.jpeg')} /> </a>
                    </div>

                    <div className='separacionMenu'>
                    </div>

                    
                    <nav className='navegacion' >
                        <ul className='menu' >
                            <NavLink exact activeClassName='active-menulink' className='opciones-menubar' to='/' >
                                <li> 
                                    Inicio
                                </li>
                            </NavLink>
                            <SubMenu1 
                                tituloSMenu1={nombreSubmenu1} 
                                sm1Opcion1={serviciosOpcion1}
                                sm1Opcion2={serviciosOpcion2}
                                sm1Opcion3={serviciosOpcion3}
                                sm1Opcion4={serviciosOpcion4}
                                sm1Opcion5={serviciosOpcion5}
                                sm1Opcion6={serviciosOpcion6}
                                sm1Opcion7={serviciosOpcion7}
                                sm1Opcion8={serviciosOpcion8}

                            />
                                <li > 
                                    <a  className='opciones-menubar'
                                        href="https://www.obcity.store/agendar-online">
                                        Agendar Online
                                    </a>
                                </li>

                                <li > 
                                    <a  className='opciones-menubar'
                                        href="https://www.obcity.store/">
                                        Tienda Online
                                    </a>
                                </li>

                            <SubMenu2 
                                tituloSMenu2={nombreSubmenu2}
                                sm2Opcion1={acercaDeOpcion1}
                                sm2Opcion2={acercaDeOpcion2}
                            />
                            {/* <NavLink activeClassName='active-menulink' className='opciones-menubar' to='/contacto' >
                                <li > 
                                    Contacto
                                </li>
                            </NavLink> */}
                            <li>
                                <a  className='opciones-menubar'
                                    href="https://www.obcity.store/contacto-ob-city-web/">
                                    Contacto
                                </a>
                            </li>

                            
                            

                            {/* <SubMenu3 /> */}

                        </ul>
                    </nav>

                    {/*<div className='container-boton-user'>
                        <SubMenu3 />
                        </div>*/}

                
                </div>

            </div>
            
        </div>
        
        
    )
}
    
const mapStateToProps = (state) => {
    console.log(state)
}

    export default connect(mapStateToProps)(Barra)

        

