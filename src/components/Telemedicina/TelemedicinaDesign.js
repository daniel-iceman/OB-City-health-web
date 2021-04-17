import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons";
import { faUserMd } from "@fortawesome/free-solid-svg-icons";
import SocialMediaTelemedicina from './SocialMediaTelemedicina';

function TelemedicinaDesign() {

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div className='container-telemedicina'>
            <div className='bannerTitle-telemedicina'>
                <h1> Consultas Online y presenciales </h1>
                <div className='subtitulo-inicial-telemedicina'>
                    <h2>
                        En OB City health ponemos a su disposición el uso de consultas online y presenciales para poder brindarle nuestro mejor servicio.
                    </h2>
                </div>
            </div>

            <SocialMediaTelemedicina />


            <div className='container-banner-1'>                
                <div className='texto-banner-sistemas'>
                    <h1>Consultas presenciales</h1>
                    <p>Si desea acudir personalmente a consulta por favor pongase en contacto con nosotros, será un placer atenderlo.</p>
                    <button>
                        <li
                            className='opciones-sideMenu'>                                    
                                <a  className='opciones-submenubar'
                                    target="_blank" 
                                    href="https://www.obcity.store/contacto-ob-city-web">
                                        Contáctenos
                                </a>
                        </li>
                        
                    </button>
                </div>  
                <div className='imagen-banner-sistemas' />                    
            </div>

            <div className='container-banner-1'>  
                <div className='imagen-banner-telemedicina' />        
        
                <div className='texto-banner-telemedicina'>
                    <h1>Consultas Online</h1>
                    <p>Si desea una consulta en línea puede ponerse en contacto con nosotros o bien agendarla directamente desde nuestra aplicación.</p>
                    <button>
                        <li
                            className='opciones-sideMenu'>                                    
                                <a  className='opciones-submenubar'
                                    target="_blank" 
                                    href="https://www.obcity.store/agendar-online">
                                        Consulta en línea
                                </a>
                        </li>
                    </button>
                </div>                           
            </div>

                       
        </div>
    )
}

export default TelemedicinaDesign
