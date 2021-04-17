import React from 'react'
import '../BarraMenu/SubMenu.css'
import {NavLink} from 'react-router-dom'


function SubMenu1({tituloSMenu1, sm1Opcion1, sm1Opcion2, sm1Opcion3, sm1Opcion4, sm1Opcion5, sm1Opcion6, sm1Opcion7, sm1Opcion8}) {
   
   

    return (
        <div className='contenedor-submenu1'>
            
                <li activeClassName='active-menulink' className='opciones-menubar'>
                    {tituloSMenu1}            
                </li>         

               
                    <ul className='lista-submenu'>  

                        <div className='bloque-listas-sm1'> 

                            <div className='bloque-izq-sm1' >

                                {/* <NavLink activeClassName='active-submenulink' className='link-menubar' to='/telemedicina' >
                                        <li > 
                                            {sm1Opcion1}                  
                                        </li>
                                </NavLink>     */}
                                <li activeClassName='active-submenulink' className='link-menubar'> 
                                    <a  className='opciones-submenubar'
                                        href="https://www.obcity.store/sistemas-de-consulta">
                                        {sm1Opcion1}
                                    </a>
                                </li> 

                                <li activeClassName='active-submenulink' className='link-menubar'> 
                                    <a  className='opciones-submenubar'
                                        href="https://www.obcity.store/nuestros-planes">
                                        {sm1Opcion2}
                                    </a>
                                </li> 
          
                        
                                {/* <NavLink activeClassName='active-submenulink' className='link-menubar' to='/sistemas' >
                                        <li > 
                                            {sm1Opcion2}                  
                                        </li>
                                </NavLink> */}

                                <li activeClassName='active-submenulink' className='link-menubar'> 
                                    <a  className='opciones-submenubar'
                                        href="https://www.obcity.store/">
                                        {sm1Opcion3}
                                    </a>
                                </li> 

                                <li activeClassName='active-submenulink' className='link-menubar'> 
                                    <a  className='opciones-submenubar'
                                        href="https://www.obcity.store/aplicacion-movil-obcityhealth">
                                        {sm1Opcion4}
                                    </a>
                                </li>                                                                  
                                
                            </div>

                            <div className='bloque-der-sm1'>

                                <li activeClassName='active-submenulink' className='link-menubar'> 
                                    <a  className='opciones-submenubar'
                                        href="https://www.obcity.store/libro-del-buen-comer">
                                        {sm1Opcion5}
                                    </a>
                                </li>      

                                <li activeClassName='active-submenulink' className='link-menubar'> 
                                    <a  className='opciones-submenubar'
                                        href="https://www.obcity.store/foro">
                                        {sm1Opcion6}
                                    </a>
                                </li>

                                <li activeClassName='active-submenulink' className='link-menubar'> 
                                    <a  className='opciones-submenubar'
                                        href="https://www.obcity.store/blog">
                                        {sm1Opcion7}
                                    </a>
                                </li> 
                                <li activeClassName='active-submenulink' className='link-menubar'> 
                                    <a  className='opciones-submenubar'
                                        href="https://www.obcity.store/prise">
                                        {sm1Opcion8}
                                    </a>
                                </li>                                

                                {/* <NavLink activeClassName='active-submenulink' className='link-menubar' to='/price' >
                                        <li > 
                                            {sm1Opcion8}
                                        </li>
                                </NavLink> */}
                                
                            </div>                       
                            
                        </div>

                        <div className='mensaje-submenu' >
                                <h1>¿Te gustaría perder una talla en 15 días?</h1>
                                <li activeClassName='active-submenulink' className='link-menubar'> 
                                    <a  className='opciones-submenubar'
                                        href="https://www.obcity.store/plan-kiitos">
                                        Conoce el Plan Kiitos
                                    </a>
                                </li>  
                                {/* <NavLink className='link-menubar' to='/kiitos' >
                                    <li > 
                                        Conoce el Plan Kiitos
                                    </li>
                                </NavLink> */}
                            </div>
                    </ul>
               
        </div>
    )
}

export default SubMenu1
