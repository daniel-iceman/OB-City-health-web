import React from 'react'
import { Link } from 'react-router-dom'

function SistemasBanner() {
    return (
        <div className='container-banner-1'>  

            <div className='imagen-banner-sistemas' />        
     
            <div className='texto-banner-sistemas'>
                <h1>Sistemas con los que trabajamos</h1>
                <p>Trabajamos con 3 sistemas, 2 de ellos; el <span style={{fontWeight:'600'}}>Keto Diet (Protocolo ABC)</span> y el <span style={{fontWeight:'600'}}>Sistema Cambridge Weight Plan</span>, le ayudarán a llegar a la meta deseada y el tercero le ayudará en la fase de estabilización y mantenimiento para no volver a recuperar lo perdido.</p>
                <button>
                    <Link className='btn-vermas-servicios'  to='/sistemas' >
                        <li> 
                            Ver más.
                        </li>
                    </Link>
                </button>
            </div>                           
            
        </div>
    )
}

export default SistemasBanner
