import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons"
import SocialMediaKiitos from './SocialMediaKiitos';

function KiitosDesign({  
    kiitos_frase_inicial,   
    kiitos_parrafo_1,
    kiitos_parrafo_2,
    kiitos_parrafo_3,
    kiitos_parrafo_4, 
    pie_cards
}) {

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div  className='container-sistemas contain-kiitos'>

            <div className='card-banner-sistemas'>
                <div className='card-banner-sistemas-filtro'/>                
            </div>

            <SocialMediaKiitos />

            <div className='container-folder' >

                <div className='folder-kiitos descripcion-kiitos'>


                    <div className='seccion-imagen-kiitos'> 
                        <div className='imagen-kiitos' >
                        </div>
                        <div className='titulo-imagen-kiitos' >
                            <h1>Kiitos</h1>
                        </div>
                    </div>                                   


                    
                    <div className='seccion-contenido-kiitos'>
                        

                        <div className='subtitulo-kiitos'>
                            <h2>
                                NUESTROS SISTEMAS
                            </h2>
                            <h1>
                                { kiitos_frase_inicial }                                           
                            </h1>
                        </div>

                        <div className='texto-kiitos'>                           
                            <div className='segmento1-texto-kiitos' >
                                <p>
                                    { kiitos_parrafo_1 }
                                </p>                                
                                <p>
                                    { kiitos_parrafo_2 }
                                </p>
                                <p>
                                    { kiitos_parrafo_3 }
                                </p>
                                <p>
                                    { kiitos_parrafo_4 }
                                </p>
                            </div>
                            
                        </div>
                        
                    </div>

                    <div className='seccion-buttons-caracteristicas  caract-kiitos'>
            
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

                            <div className='boton-cambridge' >
                                <button style={{border:'1px solid rgb(85, 68, 31)', marginRight:'5px'}}>
                                    <Link  to='/cambridgeweightplan' >
                                        <li> 
                                            {/* CAMBRIDGE */}
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

export default KiitosDesign
