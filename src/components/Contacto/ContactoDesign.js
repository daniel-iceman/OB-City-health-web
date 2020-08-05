import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

function ContactoDesign() {

    function sendEmail(e) {
        e.preventDefault()

        emailjs
        .sendForm(
          "obcityhealth@gmail.com", // Service ID (Email Services)
          "template_qQ2MwK7o", // User template (Email Templates)
          e.target,
          "user_hTYXHcl11nWL25bntSI68" //User ID (Account)
        )

        .then(
            result => {
              console.log(result.text);
            },
            error => {
              console.log(error.text);
            }
          );

    }    
    
    useEffect(() => {
        window.scroll(0,0)
      });

    

    return (
        <div className='container-contacto'>
            <div className='titulo-adress-phone-email'>
                <h1>
                    CONTÁCTANOS
                </h1>
            </div>

            <div className='formato-contacto'>
                <div className='texto-form-publicity'>
                    <h1> Será un placer ayudarl@ </h1>
                    <p> Llamenos o envienos un mensaje, ya sea si requiere mayor información o bien agendar una cita.</p>
                    <div className='logoPublicity-contact'>
                        <div className='logo-contact'/>
                        <div className='publicity-contact'>
                            <h5>Dr. Daniel Díaz <br/>
                                Médico Bariatra <br/>
                                Especialista en Manejo de Obesidad y Enfermedades Asociadas</h5>
                        </div>
                    </div>
                </div>

                <div className='container-form'>
                    <form   
                        className='form-contacto' 
                        onSubmit={sendEmail} 
                        id='form-datos-contacto'>
                        <input 
                            type='text' 
                            placeholder='Nombre' 
                            name="user_name"
                            >
                        </input>
                        <input 
                            type='text' 
                            placeholder='Apellido Paterno' 
                            name="user_fathName"
                            >
                        </input>
                        <input 
                            type='text' 
                            placeholder='Apellido Materno' 
                            name="user_mothName"
                            >
                        </input>
                        <input 
                            type='text' 
                            placeholder='Ocupación' 
                            name="user_occupation"
                            >
                        </input>
                        <input 
                            type='text' 
                            placeholder='Teléfono/Celular'
                            name="user_phone"
                            >
                        </input>
                        <input 
                            type='text' 
                            placeholder='Correo electronico'
                            name="user_email"
                            >
                        </input>  
                        <textarea
                            className='textarea-contact'
                            name="message"
                            form='form-datos-contacto'
                            placeholder='Ingrese sus comentarios...'>
                        </textarea>
                        <input className='buttonContactOBcity' type="submit" value="Enviar" />  
                        {/* <input className='buttonContactOBcity' type="submit" value="Enviar">  
                            <Link  to='/' >
                                <li> 
                                    Quiero una cita
                                </li>
                            </Link>
                        </input> */}
                        
                    </form>                   
                </div>                             

            </div> 


            <div className='adress-phone-email'>
                <div className='contact-adress'>
                    <div className='icon-contact'>
                        <FontAwesomeIcon 
                            icon={faMapMarkerAlt} 
                            fixedWidth 
                            className='FontAwseomeContact iconoDireccionExtra'/>
                        <h3> DIRECCIÓN </h3>
                    </div>
                    <div className='text-contact'>
                        <h4> Ciudad de México </h4>
                        <p>
                            Av. Insurgentes Norte <br/> 
                            No. 1894 int. 302-A <br/> 
                            Lindavista, Gustavo A. Madero.
                        </p>
                    </div>
                </div>

                <div className='contact-phone'>
                    <div className='icon-contact'>
                        <FontAwesomeIcon 
                            icon={faPhone} 
                            fixedWidth
                            className='FontAwseomeContact'/>
                        <h3> TELEFONO </h3>
                    </div>
                    <div className='text-contact'>                        
                        <p>
                            (55) 10 55 58 99
                        </p>
                    </div>
                </div>

                <div className='contact-email'>
                    <div className='icon-contact'>
                        <FontAwesomeIcon 
                            icon={faCommentDots} 
                            fixedWidth
                            className='FontAwseomeContact'/>
                        <h3> EMAIL </h3>
                    </div>
                    <div className='text-contact'>                        
                        <p>
                            obcityhealth@gmail.com
                        </p>
                    </div>                     
                </div>

            </div> 

                                  
        </div>
    )
}

export default ContactoDesign
