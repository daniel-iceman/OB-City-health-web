import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faUtensils, faCommentMedical } from "@fortawesome/free-solid-svg-icons";

function DashboardContent() {
    return (
        <div className='container-dashboard'>
            <div className='header-dashboard'>

            </div>
            <div className='dashboard-block'>

                <div className='dashboard-publicity-container'>
                    <div className='dashbord-publicity-commercial'>
                        <div className='dashboard-bienvenida'>
                            <h1>Bienvenid@</h1>
                            <h3>
                                Si eres nuestro paciente, esta sección será una herramienta para ayudarte a 
                                lograr tu objetivo: mejorar tu salud y volver a tener la talla que tanto deseas.
                                Si aún no lo eres, te invitamos a que nos conozcas y descubras que alcanzar 
                                tu meta es posible, si estas en el lugar indicado.
                            </h3>
                        </div>
                        
                    </div>
                        
                </div>

                <div className='dashboard-buttons-links'>

                    <Link   to='/bitacora' >
                        <button className='bitacora-btn'> 
                            <FontAwesomeIcon 
                                icon={ faBookOpen } 
                                fixedWidth
                                className='FontAwesomeBitacora'/>                           
                            Bitacora       
                        </button>
                    </Link>

                    <Link   to='/recetarios' >
                        <button className='recetas-btn'>                         
                            <FontAwesomeIcon 
                                icon={ faUtensils } 
                                fixedWidth
                                className='FontAwesomeCubiertos'/>
                            Recetas                       
                        </button>
                    </Link>

                    <Link   to='/consejosvip' >
                        <button className='consejos-btn'>                         
                            <FontAwesomeIcon 
                                icon={ faCommentMedical } 
                                fixedWidth
                                className='FontAwesomeConsejos'/>
                            Consejos                       
                        </button>
                    </Link>
                        
                </div>                 
                    

            </div>
            
            
        </div>
    )
}

export default DashboardContent
