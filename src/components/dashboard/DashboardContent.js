import React from 'react'
import './Dashboard.css'

function DashboardContent() {
    return (
        <div className='container-dashboard'>
            <div className='dashboard-block'>

                <div className='dashboard-publicity-container'>
                    <div className='dashbord-publicity-commercial'>
                        <div className='dashboard-bienvenida'>
                            <h1>Bienvenid@</h1>
                            <h3>
                                Si eres nuestro paciente, esta sección será una herramienta para ayudarte a 
                                lograr tu mejor objetivo: mejorar tu salud y volver a tener la talla que tanto deseas.
                                Si no eres nuestro paciente, te invitamos a que nos conozcas, y descubras que alcanzar 
                                tu meta es posible, si estas en el lugar indicado.
                            </h3>
                        </div>
                        <div className='dashboard-publicity-envios'>
                            <h1>Envío gratuito de tu tratamiento a donde te encuentres</h1>
                            <h3>
                                Si deseas que te enviemos tu tratamiento, llámanos y te lo enviaremos sin costo de gastos 
                                de envío.
                            </h3>
                        </div>
                        <div className='dashboard-publicity-recetas'>
                            <h1>Disfruta las deliciosas recetas bajas en carbohidratos que te recomendamos aquí.</h1>                        
                        </div>
                        <div className='dashboard-publicity-bitacora'>
                            <h1>Anota en la bitacora todo lo que comas, en el momento en el que lo comes.</h1>                        
                        </div>
                    </div>
                        
                </div>

                <div className='dashboard-buttons-links'>
                    <button> Bitacora </button>
                    <button> Recetas </button>
                    <button> Consejos </button>

                </div>

            </div>
            
            
        </div>
    )
}

export default DashboardContent
