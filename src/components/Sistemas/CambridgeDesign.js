import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons"
import SocialMediaCambridge from './SocialMediaCambridge';
// import OpengraphReactComponent from "opengraph-react";
// import MetaTags from 'react-meta-tags'
// import CambridgeImage from '../Images/Cambridge.png'
import Helmet from "react-helmet";

function CambridgeDesign({  
    cambridge_frase_inicial,   
    cambridge_parrafo_1,
    cambridge_parrafo_2,
    cambridge_parrafo_3,
    cambridge_parrafo_4, 
    cambridge_parrafo_5,
    pie_cards
}) {

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <main >
            <Helmet>
                <title>OB City health / Cambridge</title>
                <meta name="description" content="Especialista en manejo de sobrepeso, obesidad y enfermedades asociadas" />

                {/* <!-- Google / Search Engine Tags --> */}
                <meta itemprop="name" content="OB City health / Cambridge" />
                <meta itemprop="description" content="Especialista en manejo de sobrepeso, obesidad y enfermedades asociadas" />
                <meta itemprop="image" content="https://obcityhealth.com/static/media/Cambridge.3c4eb7bf.png" />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://obcityhealth.com/cambridgeweightplan" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="OB City health / Cambridge" />
                <meta property="og:description" content="Especialista en manejo de sobrepeso, obesidad y enfermedades asociadas" />
                <meta property="og:image" content="https://obcityhealth.com/static/media/Cambridge.3c4eb7bf.png" />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="OB City health / Cambridge" />
                <meta name="twitter:description" content="Especialista en manejo de sobrepeso, obesidad y enfermedades asociadas" />
                <meta name="twitter:image" content="https://obcityhealth.com/static/media/Cambridge.3c4eb7bf.png" />

            </Helmet>

            <div  className='container-sistemas contain-cambridge'>

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
                                    { cambridge_frase_inicial }                                           
                                </h1>
                            </div>

                            <div className='texto-cambridge'>                           
                                <div className='segmento1-texto-cambridge' >
                                    <p>
                                        { cambridge_parrafo_1 }
                                    </p>                                
                                    <p>
                                        { cambridge_parrafo_2 }
                                    </p>
                                    <p>
                                        { cambridge_parrafo_3 }
                                    </p>
                                    <p>
                                        { cambridge_parrafo_4 }
                                    </p>
                                    <p>
                                        { cambridge_parrafo_5 }
                                    </p>
                                    {/* <Link  to='/ketodietarticle' >
                                            <li> 
                                                Si deseas conocer más acerca de este tipo de metodos ingresa aquí.
                                            </li>
                                    </Link> */}
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
        </main>
    )
}

export default CambridgeDesign
