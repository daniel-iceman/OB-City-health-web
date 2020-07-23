import React from 'react'
import '../BarraMenu/SubMenu.css'
import {NavLink} from 'react-router-dom'


function SubMenu1({tituloSMenu1, sm1Opcion1, sm1Opcion2, sm1Opcion3, sm1Opcion4}) {
   
   

    return (
        <div className='contenedor-submenu1'>
            <NavLink activeClassName='active-menulink' className='opciones-menubar' to='/servicios'>
                <li>
                    {tituloSMenu1}
                </li>
            </NavLink>

               
                    <ul className='lista-submenu'>   
                        <NavLink activeClassName='active-submenulink' className='link-menubar' to='/sistemas' >
                                <li > 
                                    {sm1Opcion1}
                                </li>
                        </NavLink>
                        <NavLink activeClassName='active-submenulink' className='link-menubar' to='/recetarios' >
                                <li > 
                                    {sm1Opcion2}
                                </li>
                        </NavLink>
                        <NavLink activeClassName='active-submenulink' className='link-menubar' to='/telemedicina' >
                                <li > 
                                    {sm1Opcion3}
                                </li>
                        </NavLink>
                        <NavLink activeClassName='active-submenulink' className='link-menubar' to='/price' >
                                <li > 
                                    {sm1Opcion4}
                                </li>
                        </NavLink>
                        
                        <div className='mensaje-submenu' >
                            <h1>¿Te gustaría perder una talla en 15 días?</h1>
                            <NavLink className='link-menubar' to='/cambridgeweightplan' >
                                <li > 
                                    Conoce el sistema Cambridge Weight Plan
                                </li>
                            </NavLink>
                        </div>

                    </ul>
               
        </div>
    )
}

export default SubMenu1
