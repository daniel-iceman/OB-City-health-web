import React from 'react'
import '../BarraMenu/SubMenu.css'
import {NavLink} from 'react-router-dom'

function SubMenu_2({tituloSMenu2, sm2Opcion1, sm2Opcion2, sm2Opcion3, sm2Opcion4, sm2Opcion5}) {

    return (
        <div className='contenedor-submenu2'>
            <NavLink activeClassName='active-menulink' className='opciones-menubar' to='/articulos'>
                <li>
                    {tituloSMenu2}
                </li>
            </NavLink>
            
                <ul className='lista-submenu'>

                    <div className='bloque-listas'>
                        <div className='bloque-izq' >
                            <NavLink activeClassName='active-submenulink' className='link-menubar' to='/articulo_covid19' >
                                    <li > 
                                        {sm2Opcion1}
                                    </li>
                            </NavLink>
                            <NavLink activeClassName='active-submenulink' className='link-menubar' to='/articulo_influenza' >
                                    <li > 
                                        {sm2Opcion2}
                                    </li>
                            </NavLink>
                            <NavLink activeClassName='active-submenulink' className='link-menubar' to='/articulo_osteoarticular' >
                                    <li > 
                                        {sm2Opcion3}
                                    </li>
                            </NavLink>
                            <NavLink activeClassName='active-submenulink' className='link-menubar' to='/articulo_embarazo' >
                                    <li > 
                                        {sm2Opcion4}
                                    </li>
                            </NavLink>
                        </div>

                        <div className='bloque-der'>
                          <NavLink activeClassName='active-submenulink' className='link-menubar' to='/articulo_resistenciainsulina' >
                                    <li > 
                                        {sm2Opcion5}
                                    </li>
                            </NavLink>
                        </div>

                    </div>

                    <div className='mensaje-submenu' >
                        <h1>¿Te gustaría perder medidas con un método practico y sin sacrificar tanto?</h1>
                        <NavLink className='link-menubar' to='/protocoloabc' >
                            <li > 
                                Conoce el sistema ABC
                            </li>
                        </NavLink>
                    </div>

            
                </ul>
        </div>
    )
}

export default SubMenu_2
