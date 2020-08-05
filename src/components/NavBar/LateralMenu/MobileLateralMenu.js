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



function MobileLateralMenu() {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
      setOpenMenu(!openMenu);
    };

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
    )
}

export default MobileLateralMenu
            
            
            



