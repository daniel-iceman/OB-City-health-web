import React from 'react'
import { Link } from 'react-router-dom'

function TiendaBanner() {
    return (
        <div className='container-banner-1'>  

            <div className='imagen-banner-telemedicina' />        
     
            <div className='texto-banner-telemedicina'>
                <h1>Tienda en línea</h1>
                <p>Estamos más cerca de usted.  Le ofrecemos la opción de poder adquirir algunos de nuestros productos via Online.</p>
                <button>
                    <li
                        className='btn-vermas-telemedicina'>                                    
                            <a  className='opciones-submenubar'
                                target="_blank" 
                                href="https://www.obcity.store/agendar-online">
                                    Ver más
                            </a>
                    </li>
                    
                </button>
            </div>                           
            
        </div>
    )
}

export default TiendaBanner