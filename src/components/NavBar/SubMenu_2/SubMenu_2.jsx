import React from 'react'
import '../BarraMenu/SubMenu.css'
import {NavLink} from 'react-router-dom'

function SubMenu_2({tituloSMenu2, sm2Opcion1, sm2Opcion2}) {

    return (
        <div className='contenedor-submenu2'>
            <NavLink activeClassName='active-menulink' className='opciones-menubar' to='/articulos'>
                <li>
                    {tituloSMenu2}
                </li>
            </NavLink>
            
                <ul className='lista-submenu'>                   
                        
                    {/* <NavLink activeClassName='active-submenulink' className='link-menubar' to='/acerca' >
                            <li > 
                                {sm2Opcion1}
                            </li>
                    </NavLink> */}
                    <li activeClassName='active-submenulink' className='link-menubar'> 
                                    <a  className='opciones-submenubar'
                                        href="https://www.obcity.store/acerca-de">
                                        {sm2Opcion1}
                                    </a>
                                </li>
                    <NavLink activeClassName='active-submenulink' className='link-menubar' to='/articulos' >
                            <li > 
                                {sm2Opcion2}
                            </li>
                    </NavLink>
                            
                        
                        

                    

                    <div className='mensaje-submenu publicidad2' >
                        <h1>¿Te gustaría perder medidas con un método practico y sin sacrificar tanto?</h1>
                            <li activeClassName='active-submenulink' className='link-menubar'> 
                                    <a  className='opciones-submenubar'
                                        href="https://www.obcity.store/plan-protein-57">
                                        Conoce el sistema Keto Diet
                                    </a>
                                </li>
                        {/* <NavLink className='link-menubar' to='/protocoloabc' >
                            <li > 
                                Conoce el sistema Keto Diet
                            </li>
                        </NavLink> */}
                    </div>

            
                </ul>
        </div>
    )
}

export default SubMenu_2
