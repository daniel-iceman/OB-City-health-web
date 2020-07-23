import React, { useEffect } from 'react'
import SocialMediaABC from './SocialMediaABC'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons"


function ProtocoloABCDesign({    
    abc_frase_inicial,   
    abc_parrafo_1,
    pie_cards
}) {

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div className='container-sistemas contain-abc' >
            <div className='card-banner-sistemas'>
                               
            </div>

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
                        <SocialMediaABC />
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
                                    Las cetonas son producidas en el hígado a partir de la grasa corporal y estas a su vez son usadas como combustible en el cuerpo incluido el cerebro y el corazón.
                                </p>
                                <p>
                                   Este método consiste en el consumo de una malteada baja en carbohidratos y rica en proteínas como desayuno y cena. Durante la comida consumirá alimentos balanceados, reduciendo la ingesta de carbohidratos. De esta forma, obtendrá resultados más rápidos en la pérdida de grasa corporal y medidas.
                                </p>
                                <p>
                                    Aprenda a balancear sus alimentos de forma adecuada.      Este es un metodo económico, práctico y seguro que le ayudará a alcanzar sus metas en un corto plazo.
                                </p>
                                <Link  to='/ketodietarticle' >
                                        <li> 
                                            Si deseas conocer más acerca de este tipo de metodos ingresa aquí.
                                        </li>
                                </Link>
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
