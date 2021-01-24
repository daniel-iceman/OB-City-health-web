import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons";
import { faUserMd } from "@fortawesome/free-solid-svg-icons";
import SocialMediaTelemedicina from './SocialMediaTelemedicina';

function TelemedicinaDesign() {

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div className='container-telemedicina'>
            <div className='bannerTitle-telemedicina'>
                <h1> Telemedicina </h1>
                <div className='subtitulo-inicial-telemedicina'>
                    <h2>
                        En OB City health ponemos a su disposición el uso de consultas online para poder brindarle nuestro servicio en el lugar en el que se encuentre y desde la comodidad de su casa.
                    </h2>
                </div>
            </div>

            <SocialMediaTelemedicina />

            <div className='container-informacion-telemedicina'>
                <div className='informacion-telemedicina'>
                    
                    <div className='documento-telemedicina'>
                        
                        <h3><span className='span-blueBold'> ¿Qué es telemedicina? </span> </h3>
                        <p>Es cualquier acto médico realizado sin contacto físico directo entre el profesional y el paciente, o entre profesionales entre sí, por medio de algún sistema telemático. En otras palabras, la telemedicina utiliza las tecnologías de la información y las telecomunicaciones para proporcionar o soportar la asistencia médica, independientemente de la distancia que separa a los que ofrecen el servicio.  La OMS la considera una herramienta vital en del desarrollo de la labor médica. </p>
                        <br/>
                        <h3><span className='span-blueBold'> ¿Porque OB City health ofrece este servicio? </span> </h3>
                        <p>La valoración y atención de un paciente que presenta sobrepeso u obesidad se puede llevar sin problemas ni contratiempos de forma remota, no importando si usted se encuentra en otra ciudad o si por algún motivo no puede salir de su domicilio, ya que mediante este sistema podemos llevar una consulta médica profesional y valorar aspectos como: </p>
                        <ul>
                            <li><span className='span-blueBold'>Valoración de su peso en su domicilio.</span></li>
                            <li><span className='span-blueBold'>Valoración de su talla de ropa.</span></li>
                            <li><span className='span-blueBold'>Monitorear su presión arterial si padece hipertensión con baumanometro digital en casa.</span></li>
                            <li><span className='span-blueBold'>Monitorear su glucosa capilar si padece diabetes con glucometro.</span></li>
                            <li><span className='span-blueBold'>Monitorear y analizar estudios clínicos de laboratorio y e indicar tratamiento de ser necesario. </span></li>
                        </ul>
                        <p>En OB City health tenemos la experiencia en este sistema de consulta por lo que usted solo deberá ocuparse de conseguir su objetivo.</p>
                        <br/>
                        <h3><span className='span-blueBold'> Sistemas que utilizamos para video conferencias </span> </h3>
                        <p>La elección del medio de comunicacion se la dejamos a usted, podrá elegir aquella con la cual se sienta mas comodo/a o familiarizado/a, aunque recomendamos un medio en el cual sea posible utilizar una conexion por cable (no wifi), para que la calidad de conexión y comunicación sea la optima.</p>
                        <p>Los métodos de comunicación con los cuales trabajamos son:</p>
                        <ul>
                            <li><span className='span-blueBold'>Zoom *</span></li>
                            <li><span className='span-blueBold'>Google Meet *</span></li>
                            <li><span className='span-blueBold'>Whatsapp video llamada</span></li>                        
                        </ul>
                        <h5>* Este es un sistema de comunicación que recomendamos ya que garantiza una comunicación adecuada si su equipo esta conectado mediante cable a su servicio de internet, ademas de contar con la posibilidad de transmision de archivos multimedia.</h5>
                        <br/>
                        <h3><span className='span-blueBold'> ¿Cuales son los pasos a seguir si estoy interesado/a? </span> </h3>
                        <br/>
                        <div className='pasos-telemedicina'>
                            <div className='paso1'>
                                <FontAwesomeIcon icon={faPhoneVolume} fixedWidth className='FontAwseomeTelemedicina telephone'/>
                                <h2>Comuniquese con nosotros</h2>
                                <p>Será un placer atenderlo</p>
                            </div>
                            <div className='paso2'>
                                <FontAwesomeIcon icon={faCalendarAlt} fixedWidth className='FontAwseomeTelemedicina calendar'/>
                                <h2>Agende una cita</h2>
                                <p>Aquí eligirá el metodo mediante el cual quiere que nos pongamos en contacto con usted</p>
                            </div>
                            <div className='paso3'>
                                <FontAwesomeIcon icon={faCreditCard} fixedWidth className='FontAwseomeTelemedicina credit'/>
                                <h2>Realice el pago del servicio</h2>
                                <p>Le indicaremos formas de pago y pediremos dirección de envío de sus productos</p>
                            </div>
                            <div className='paso4'>
                                <FontAwesomeIcon icon={faShippingFast} fixedWidth className='FontAwseomeTelemedicina truck'/>
                                <h2>Envío de productos</h2>
                                <p>Recibirá sus productos en la comodidad de su casa</p>
                            </div>
                            <div className='paso5'>
                                <FontAwesomeIcon icon={faUserMd} fixedWidth className='FontAwseomeTelemedicina doctor'/>
                                <h2>Consulta médica</h2>
                                <p>El doctor le brindará la consulta para ayudarlo/a a conseguir sus objetivos</p>
                            </div>
                        </div>
                        <div className='botonAContacto' >
                            <button>
                                {/* <Link  to='/contacto' >
                                    <li> 
                                        QUIERO UNA CITA
                                    </li>
                                </Link> */}
                                <li
                                    style={{listStyle:'none'}}>                                        
                                    <a 
                                        style={{textDecoration:'none'}}
                                        target="_blank" 
                                        href="https://www.obcity.store/contacto-ob-city-web/">
                                        Contacto
                                    </a>
                                </li> 
                            </button>
                        </div>
                        <div className='fotos-telemedicina'>
                            <div className='cont-oms'>
                                <div className='oms'/>
                            </div>

                            <div className='cont-zoom'>
                                <div className='zoom'/>
                            </div>

                            <div className='cont-meet'>
                                <div className='meet'/>
                            </div>

                            <div className='cont-whatsapp'>
                                <div className='whatsapp'/>
                            </div>

                        </div>
                    
                    </div>

                </div> 
            </div>           
        </div>
    )
}

export default TelemedicinaDesign
