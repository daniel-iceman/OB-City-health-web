import React from 'react'
import './Dashboard.css'

function DashboardContent() {
    return (
        <div className='container-dashboard'>
            <div className='dashboard-block'>
                <div className='dashboard-publicity-container'>
                    <div className='dashboard-bienvenida'>
                        <h1>Bienvenid@</h1>
                        <h3>
                            Si eres nuestro paciente, esta sección será una herramienta para ayudarte a 
                            lograr tu mejor objetivo: mejorar tu salud y volver a tener la talla que tanto deseas.
                            Si no eres nuestro paciente, te invitamos a que nos conozcas, y descubras que alcanzar 
                            tu meta es posible, si estas en el lugar indicado.
                        </h3>
                    </div>
                </div>
                <div className='dashboard-buttons-links'>
                    <button> boton 1 </button>
                    <button> boton 1 </button>
                    <button> boton 1 </button>

                </div>

            </div>
            
            
        </div>
    )
}

export default DashboardContent
