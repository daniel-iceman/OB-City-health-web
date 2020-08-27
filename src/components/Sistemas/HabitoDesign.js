import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons"
import SocialMediaHabito from './SocialMediaHabito';

function HabitoDesign({  
    habito_frase_inicial,   
    habito_parrafo_1,
    habito_parrafo_2,
    habito_parrafo_3,
    habito_parrafo_4, 
    habito_parrafo_5
}) {

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        
            <div className='container-sistemas contain-habito' >
                <div className='card-banner-sistemas'>
                    <div className='card-banner-sistemas-filtro'/>                
                </div>
                
                <SocialMediaHabito />
    
                <div className='container-folder' >
    
                    <div className='folder-habito'>
    
    
                        <div className='seccion-imagen-habito'> 
                            <div className='imagen-habito' >
                            </div>
                            <div className='titulo-imagen-habito' >
                                <h1>Hábito Alimenticio</h1>
                            </div>
                        </div>                                   
    
    
                        
                        <div className='seccion-contenido-habito'>
                            
    
                            <div className='subtitulo-habito'>
                                <h2>
                                    NUESTROS SISTEMAS
                                </h2>
                                <h1>
                                    { habito_frase_inicial }                                          
                                </h1>
                            </div>
    
                            <div className='texto-habito'>                           
                                <div className='segmento1-texto-habito' >
                                    <p>
                                        { habito_parrafo_1 }
                                    </p>                                
                                    <p>
                                        { habito_parrafo_2 }
                                    </p>
                                    <p>
                                        { habito_parrafo_3 }
                                    </p>
                                    <p>
                                        { habito_parrafo_4 }
                                    </p>
                                    <p>
                                        { habito_parrafo_5 }
                                    </p>
                                    {/* <Link  to='/ketodietarticle' >
                                            <li> 
                                                Si deseas conocer más acerca de este tipo de metodos ingresa aquí.
                                            </li>
                                    </Link> */}
                                </div>
                                
                            </div>
                            
                        </div>
    
                        <div className='seccion-buttons-caracteristicas  caract-habito'>
                
                            <div className='botones-sistemas' >                 
                                <h1>
                                    ¿Deseas conocer nuestros otros sistemas?
                                </h1>
                                <div className='boton-cambridge' >
                                    <button style={{border:'1px solid rgb(85, 68, 31)', marginRight:'5px'}}>
                                        <Link  to='/cambridgeweightplan' >
                                            <li> 
                                                {/* cambridge */}
                                            </li>
                                        </Link>
                                    </button>
                                </div>
    
                                <div className='boton-abc' >
                                    <button style={{border:'1px solid rgb(85, 68, 31)'}}>
                                        <Link  to='/protocoloabc' >
                                            <li> 
                                                {/* ABC*/}
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
                                            icon={regularStar} 
                                            style={{fontSize:'18px',
                                                    color:'#44558f',
                                                    marginRight:'5px'}}/>
                                        <FontAwesomeIcon 
                                            icon={regularStar} 
                                            style={{fontSize:'18px',
                                                    color:'#44558f',
                                                    marginRight:'5px'}}/>
                                        <FontAwesomeIcon 
                                            icon={regularStar} 
                                            style={{fontSize:'18px',
                                                    color:'#44558f',
                                                    marginRight:'5px'}}/>
                                        <FontAwesomeIcon 
                                            icon={regularStar} 
                                            style={{fontSize:'18px',
                                                    color:'#44558f',
                                                    marginRight:'5px'}}/>
                                    </div>
    
                                    <h5>Nivel de mantenimiento</h5>
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
                                
                            
                            </div>  
                        
                        
                    </div>
                            
    
                    </div>         
                </div>
            </div>
    )
}

export default HabitoDesign
