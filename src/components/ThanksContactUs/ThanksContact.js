import React, { useEffect } from 'react'
import './ThanksContact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

function ThanksContact() {

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div className='container-thanks-contact'>
            <div className='block-thanks-contact'>
                <div className='mensajeEnviado-icono'>
                    <FontAwesomeIcon icon={faCheckCircle} 
                        fixedWidth 
                        className='FontAwseomeThanksContact'/>
                </div>
                <div className='titulo-mensajeEnviado'>
                    <h1>Su mensaje ha sido enviado con éxito.</h1>
                </div>
                <div className='subtitulo-mensajeEnviado'>
                    <h2>Ahora lo invitamos a que conozca nuestro sitio.</h2>
                </div>
                <div className='botonThanksContacto' >
                    <button>
                        <Link  to='/' >
                            <li> 
                                Ir a Inicio
                            </li>
                        </Link>
                    </button>
                </div>
            </div>
            

            
        </div>
    )
}

export default ThanksContact
