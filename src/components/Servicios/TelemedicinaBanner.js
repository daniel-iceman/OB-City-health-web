import React from 'react'
import { Link } from 'react-router-dom'

function TelemedicinaBanner() {
    return (
        <div className='container-banner-1'>  

            <div className='imagen-banner-telemedicina' />        
     
            <div className='texto-banner-telemedicina'>
                <h1>Consultas online y presenciales</h1>
                <p>Trabajamos con un sistema híbrido, es decir podemos atenderlo personalmente o por medio del sistema online, usted escoge el método que más le agrade.</p>
                <button>
                    <Link className='btn-vermas-telemedicina'  to='/telemedicina' >
                        <li> 
                            Ver más.
                        </li>
                    </Link>
                </button>
            </div>                           
            
        </div>
    )
}

export default TelemedicinaBanner
