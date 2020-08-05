import React, { useState } from 'react'
import './BarraMenu.css'
import '../../Images/OBC.PNG'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import SubMenu1 from '../SubMenu_1/SubMenu_1'
import SubMenu2 from '../SubMenu_2/SubMenu_2';
import LateralMenu from '../LateralMenu/LateralMenu';

function Barra() {
    // SUBMENU 1
    const [nombreSubmenu1] = useState('Servicios')
    const [serviciosOpcion1] = useState ('Sistemas que manejamos')
    const [serviciosOpcion2] = useState ('Recetarios')
    const [serviciosOpcion3] = useState ('Telemedicina')
    const [serviciosOpcion4] = useState ('PRISE')

    // SUBMENU 2
    const [nombreSubmenu2] = useState('Articulos')
    const [articulosOpcion1] = useState ('Obesidad y CoViD-19')
    const [articulosOpcion2] = useState ('Obesidad e Influenza A H1N1')
    const [articulosOpcion3] = useState ('Obesidad y Alteraciones Osteoarticulares')
    const [articulosOpcion4] = useState ('Embarazo y obesidad')
    const [articulosOpcion5] = useState ('Resistencia a la insulina y Nutriterapia')

    
    return (
       
        <div className='container-barraMenu'>
            <div className='posicion-barraMenu'>
                <div className='barraMenu'>
                    <div className='container-boton-menu-lateral'>
                        <LateralMenu />
                    </div>
                    <div className="barraMenu_logo">
                        <a href ="/"> <img src={require('../../Images/OBC.PNG')} /> </a>
                    </div>

                    <div className='separacionMenu'>
                    </div>

                    
                    <nav className='navegacion' >
                        <ul className='menu' >
                            <NavLink exact activeClassName='active-menulink' className='icono-home' to='/' >
                                <li> <FontAwesomeIcon 
                                    icon={faHome} 
                                    style={{fontSize:'22px'}} /> 
                                </li>
                            </NavLink>
                            <SubMenu1 
                                tituloSMenu1={nombreSubmenu1} 
                                sm1Opcion1={serviciosOpcion1}
                                sm1Opcion2={serviciosOpcion2}
                                sm1Opcion3={serviciosOpcion3}
                                sm1Opcion4={serviciosOpcion4}

                            />
                            <NavLink activeClassName='active-menulink' className='opciones-menubar'  to='/acerca' >
                                <li > 
                                    Acerca de
                                </li>
                            </NavLink>
                            <SubMenu2 
                                tituloSMenu2={nombreSubmenu2}
                                sm2Opcion1={articulosOpcion1}
                                sm2Opcion2={articulosOpcion2}
                                sm2Opcion3={articulosOpcion3}
                                sm2Opcion4={articulosOpcion4}
                                sm2Opcion5={articulosOpcion5}
                            />
                            <NavLink activeClassName='active-menulink' className='opciones-menubar' to='/contacto' >
                                <li > 
                                    Contacto
                                </li>
                            </NavLink>

                        </ul>
                    </nav>

                
                </div>

            </div>
            
        </div>
        
        
    )
}
    
    export default Barra

        

