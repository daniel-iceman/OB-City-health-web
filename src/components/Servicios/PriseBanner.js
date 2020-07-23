import React from 'react'
import { Link } from 'react-router-dom'

function PriseBanner() {
    return (
        <div className='container-banner-2'>  

            <div className='texto-banner-price'>
                <h1>PRISE</h1>
                <p>Servicio integral para su empresa apoyando a su personal para prevenir enfermedades derivadas del sobrepeso y obesidad.</p>
                <button>
                    <Link className='btn-vermas-price'  to='/price' >
                        <li> 
                            Ver más.
                        </li>
                    </Link>
                </button>
            </div>      

            <div className='imagen-banner-price' />                     
            
        </div>
    )
}

export default PriseBanner
                    
     
