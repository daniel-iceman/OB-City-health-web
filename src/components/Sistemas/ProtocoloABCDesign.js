import React, { useEffect } from 'react'
import SocialMediaABC from './SocialMediaABC'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons"


function ProtocoloABCDesign({    
    abc_frase_inicial,   
    abc_parrafo_1,
    abc_parrafo_2,
    abc_parrafo_3,
    abc_parrafo_4,
    pie_cards
}) {

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div className='container-sistemas contain-abc' >
            <div className='card-banner-sistemas'>
                               
            </div>

            <SocialMediaABC />

            <div className='container-folder' >

                <div className='folder-abc'>


                    <div className='seccion-imagen-abc'> 
                        <div className='imagen-abc' >
                        </div>
                        <div className='titulo-imagen-abc' >
                            <h1>Keto Diet</h1>
                        </div>
                    </div>                             


                    <div className='seccion-contenido-abc'>
                        <div className='subtitulo-abc'>
                            <h2>
                                NUESTROS SISTEMAS
                            </h2>
                            <h1>
                                { abc_frase_inicial }                                           
                            </h1>
                        </div>

                        <div className='texto-abc'>                           
                            <div className='segmento1-texto-abc' >
                                <p>
                                    { abc_parrafo_1 }
                                </p>                                
                                <p>
                                    { abc_parrafo_2 }
                                </p>
                                <p>
                                    { abc_parrafo_3 }
                                </p>
                                <p>
                                    { abc_parrafo_4 }
                                </p>
                                {/* <Link  to='/ketodietarticle' >
                                        <li> 
                                            Si deseas conocer más acerca de este tipo de metodos ingresa aquí.
                                        </li>
                                </Link> */}
                            </div>
                        </div>
                        
                    </div>

                    <div className='seccion-buttons-caracteristicas  caract-abc'>
            
                        <div className='botones-sistemas' >                 
                            <h1>
                                ¿Deseas conocer nuestros otros sistemas?
                            </h1>
                            <div className='boton-cambridge' >
                                <button style={{border:'1px solid rgb(85, 68, 31)', marginRight:'5px'}}>
                                    <Link  to='/cambridgeweightplan' >
                                        <li> 
                                            {/* CAMBRIDGE WEIGHT PLAN */}
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
                                        icon={regularStar} 
                                        style={{fontSize:'18px',
                                                color:'#44558f',
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

export default ProtocoloABCDesign
