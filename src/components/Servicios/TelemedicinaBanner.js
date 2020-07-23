import React from 'react'
import { Link } from 'react-router-dom'

function TelemedicinaBanner() {
    return (
        <div className='container-banner-1'>  

            <div className='imagen-banner-telemedicina' />        
     
            <div className='texto-banner-telemedicina'>
                <h1>Telemedicina</h1>
                <p>La tecnología está de nuestro lado.  Consultas por medio de video conferencia y envío de tratamientos a la comodidad de su domicilio.</p>
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
