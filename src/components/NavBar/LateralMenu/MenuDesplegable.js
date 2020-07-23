import React from 'react'
import {NavLink} from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { faUserMd } from "@fortawesome/free-solid-svg-icons";
import { faFileMedical } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

function MenuDesplegable({opcion1, opcion2, opcion3, opcion4, opcion5}) {
    

    return (
        <div>
            <input type="checkbox" id="check" />
            <label htmlFor="check">
            <i className="fa-bars" id="btn">
                <FontAwesomeIcon                     
                    icon={faBars} 
                    style={{
                        marginRight:'0px', 
                        marginTop:'0px', 
                        background:'white',
                        color:'rgb(0, 39, 77)'}} /></i>
            <i className="fas fa-times" id="cancel">
                <FontAwesomeIcon 
                    icon={faTimes} 
                    style={{
                        marginRight:'1px',
                        background:'#1e2b38',
                        color:'white'}} /></i>
            </label>
                <div className="sidebar" >
                    <header>MENÚ</header>
                    <ul>
                        <NavLink                   
                            exact                
                            activeClassName='active-lateralmenulink' 
                            className='opciones-sideMenu' 
                            to='/'>                                     
                            <li>                           
                                <FontAwesomeIcon                          
                                className='FontAwesome' 
                                icon={faHome} />
                                {opcion1}
                            </li>
                        </NavLink>                            

                        <NavLink 
                            activeClassName='active-lateralmenulink' 
                            className='opciones-sideMenu' 
                            to='/servicios'>
                            <li>
                                <FontAwesomeIcon 
                                    className='FontAwesome' 
                                    icon={faStethoscope} />
                                {opcion2}
                            </li>
                        </NavLink>
                        <NavLink 
                            activeClassName='active-lateralmenulink' 
                            className='opciones-sideMenu' 
                            to='/acerca'>
                            <li>
                                <FontAwesomeIcon 
                                    className='FontAwesome' 
                                    icon={faUserMd} />
                                {opcion3}
                            </li>
                        </NavLink>
                        <NavLink 
                            activeClassName='active-lateralmenulink' 
                            className='opciones-sideMenu' 
                            to='/articulos'>
                            <li>
                                <FontAwesomeIcon 
                                    className='FontAwesome'
                                    icon={faFileMedical} />
                                {opcion4}
                            </li>
                        </NavLink>
                        <NavLink 
                            activeClassName='active-lateralmenulink' 
                            className='opciones-sideMenu' 
                            to='/contacto'>
                            <li>
                                <FontAwesomeIcon 
                                    className='FontAwesome'
                                    icon={faPhoneAlt} />
                                {opcion5}
                            </li>
                        </NavLink>
                        
                    </ul>
                </div>
            
        </div>
    )
}

export default MenuDesplegable
