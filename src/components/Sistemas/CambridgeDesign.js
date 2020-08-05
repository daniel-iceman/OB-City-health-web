import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons"
import SocialMediaCambridge from './SocialMediaCambridge';

function CambridgeDesign({    
    pie_cards
}) {

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div className='container-sistemas contain-cambridge' >
            <div className='card-banner-sistemas'>
                <div className='card-banner-sistemas-filtro'/>                
            </div>

            <SocialMediaCambridge />
            
            <div className='container-folder' >

                <div className='folder-cambridge descripcion-cambridge'>


                    <div className='seccion-imagen-cambridge'> 
                        <div className='imagen-cambridge' >
                        </div>
                        <div className='titulo-imagen-cambridge' >
                            <h1>Cambridge Weight Plan</h1>
                        </div>
                    </div>                                   


                    
                    <div className='seccion-contenido-cambridge'>
                        

                        <div className='subtitulo-cambridge'>
                            <h2>
                                NUESTROS SISTEMAS
                            </h2>
                            <h1>
                                Nuestro metodo estrella, no podrás creer los resultados.                                           
                            </h1>
                        </div>

                        <div className='texto-cambridge'>                           
                            <div className='segmento1-texto-cambridge' >
                                <p>
                                    Aprender a llevar una buena alimentación es básico, sin embargo existen situaciones apremiantes que nos obligan a encontrar resultados en un tiempo mucho menor.  
                                </p>                                
                                <p>
                                    El programa Sole Source Plus® de Cambridge Weight Plan® es recomendado sólo para personas con un IMC mayor a 25.
                                </p>
                                <p>
                                    El programa Cambridge Weight Plan®  Sole Source Plus® te permite una mayor flexibilidad. Este programa consiste en tres sobres sobres del Cambridge Weight Plan (que serán tu desayuno, comida y cena). 
                                </p>
                                <p>
                                    Cambridge Weight Plan® puede ser utilizado por personas que padezcan enfermedades como hipertensión y diabetes con seguridad así como por cualquier persona que desee obtener resultados rápidos y seguros que no pongan en riesgo su salud.*
                                </p>
                                <p>
                                Este paso debe ser utilizado durante un máximo de doce semanas (de acuerdo con la Guía de NICE de 2006).   Después tendrá que pasar a un plan bajo en carbohidratos rico en proteinas (tomando una comida practicamente normal a medio día y un par de malteadas en desayuno y cena) durante aproximadamente 1 mes.   Estando en este punto, si aun requiere bajar de peso y deseas continuar con este programa, puede reiniciar  Sole Source Plus® por otro periodo de 1 a doce semanas o escoger otro programa con un contenido calórico mayor.   Y después... ¡a disfrutar los resultados!.
                                </p>
                                <Link  to='/ketodietarticle' >
                                        <li> 
                                            Si deseas conocer más acerca de este tipo de metodos ingresa aquí.
                                        </li>
                                </Link>
                            </div>
                            
                        </div>
                        
                    </div>

                    <div className='seccion-buttons-caracteristicas  caract-cambridge'>
            
                        <div className='botones-sistemas' >                 
                            <h1>
                                ¿Deseas conocer nuestros otros sistemas?
                            </h1>
                            <div className='boton-abc' >
                                <button style={{border:'1px solid rgb(85, 68, 31)', marginRight:'5px'}}>
                                    <Link  to='/protocoloabc' >
                                        <li> 
                                            {/* PROTOCOLO */}
                                        </li>
                                    </Link>
                                </button>
                            </div>

                            <div className='boton-habito' >
                                <button style={{border:'1px solid rgb(85, 68, 31)'}}>
                                    <Link  to='/habitoalimenticio' >
                                        <li> 
                                            {/* HABITO ALIMENTICIO */}
                                        </li>
                                    </Link>
                                </button>
                            </div>                       

                        </div> 

                        <div className='seccion-caracteristicas'>
                            <h1>CARACTERISTICAS</h1>
                            
                            <div className='caracteristicas-niveles'>
                                <h5>Nivel de dificultad</h5>
                                <div className='estrellas'>
                                    <FontAwesomeIcon 
                                        icon={solidStar} 
                                        style={{fontSize:'18px',
                                                color:'#eaa81b',
                                                marginRight:'5px'}}/>
                                    <FontAwesomeIcon 
                                        icon={solidStar} 
                                        style={{fontSize:'18px',
                                                color:'#eaa81b',
                                                marginRight:'5px'}}/>
                                    <FontAwesomeIcon 
                                        icon={solidStar} 
                                        style={{fontSize:'18px',
                                                color:'#eaa81b',
                                                marginRight:'5px'}}/>
                                    <FontAwesomeIcon 
                                        icon={solidStar} 
                                        style={{fontSize:'18px',
                                                color:'#eaa81b',
                                                marginRight:'5px'}}/>
                                    <FontAwesomeIcon 
                                        icon={regularStar} 
                                        style={{fontSize:'18px',
                                                color:'#44558f',
                                                marginRight:'5px'}}/>
                                </div>

                                <h5>Nivel de pérdida de grasa corporal</h5>
                                <div className='estrellas'>
                                    <FontAwesomeIcon 
                                        icon={solidStar} 
                                        style={{fontSize:'18px',
                                                color:'#eaa81b',
                                                marginRight:'5px'}}/>
                                    <FontAwesomeIcon 
                                        icon={solidStar} 
                                        style={{fontSize:'18px',
                                                color:'#eaa81b',
                                                marginRight:'5px'}}/>
                                    <FontAwesomeIcon 
                                        icon={solidStar} 
                                        style={{fontSize:'18px',
                                                color:'#eaa81b',
                                                marginRight:'5px'}}/>
                                    <FontAwesomeIcon 
                                        icon={solidStar} 
                                        style={{fontSize:'18px',
                                                color:'#eaa81b',
                                                marginRight:'5px'}}/>
                                    <FontAwesomeIcon 
                                        icon={solidStar} 
                                        style={{fontSize:'18px',
                                                color:'#eaa81b',
                                                marginRight:'5px'}}/>
                                </div>

                                <h5>Nivel de satisfacción</h5>
                                <div className='estrellas'>
                                    <FontAwesomeIcon 
                                        icon={solidStar} 
                                        style={{fontSize:'18px',
                                                color:'#eaa81b',
                                                marginRight:'5px'}}/>
                                    <FontAwesomeIcon 
                                        icon={solidStar} 
                                        style={{fontSize:'18px',
                                                color:'#eaa81b',
                                                marginRight:'5px'}}/>
                                    <FontAwesomeIcon 
                                        icon={solidStar} 
                                        style={{fontSize:'18px',
                                                color:'#eaa81b',
                                                marginRight:'5px'}}/>
                                    <FontAwesomeIcon 
                                        icon={solidStar} 
                                        style={{fontSize:'18px',
                                                color:'#eaa81b',
                                                marginRight:'5px'}}/>
                                    <FontAwesomeIcon 
                                        icon={solidStar} 
                                        style={{fontSize:'18px',
                                                color:'#eaa81b',
                                                marginRight:'5px'}}/>
                                </div>

                            </div>
                            
                            <p> { pie_cards } </p>
                        
                        </div>  
                    
                    
                </div>
                        

                </div>         
            </div>
        </div>
    )
}

export default CambridgeDesign
