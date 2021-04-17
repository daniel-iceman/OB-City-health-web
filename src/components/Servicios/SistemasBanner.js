import React from 'react'
import { Link } from 'react-router-dom'

function SistemasBanner() {
    return (
        <div className='container-banner-1'>                     
     
            <div className='texto-banner-sistemas'>
                <h1>Sistemas con los que trabajamos</h1>
                <p>Trabajamos con 4 sistemas, 3 de ellos; el <span style={{fontWeight:'600'}}>Keto Diet (Plan Protein 57)</span>, el <span style={{fontWeight:'600'}}>Sistema Kiitos (Plan Kiitos)</span> y el <span style={{fontWeight:'600'}}>Sistema Cambridge Weight Plan</span>, le ayudarán a llegar a la meta deseada y el cuarto sistema le ayudará en la fase de estabilización y mantenimiento para no volver a recuperar lo perdido.</p>
                <button>
                    <Link className='btn-vermas-servicios'  to='/sistemas' >
                        <li> 
                            Ver más.
                        </li>
                    </Link>
                </button>
            </div>       

            <div className='imagen-banner-sistemas' />                     
            
        </div>
    )
}

export default SistemasBanner
