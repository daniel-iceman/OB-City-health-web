import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons"
import SocialMediaHabito from './SocialMediaHabito';

function HabitoDesign({    
    pie_cards
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
                                    Después de terminar el tratamiento, no volveras a subir.                                          
                                </h1>
                            </div>
    
                            <div className='texto-habito'>                           
                                <div className='segmento1-texto-habito' >
                                    <p>
                                        Aprende a comer es la base del éxito.    Recuerde comer sano no está peleado con comer rico.
                                    </p>                                
                                    <p>
                                        No es una dieta de calorías, ni tampoco le pediré que pese sus alimentos o cuente puntos, simplemente tendrá que aprender que alimentos son adecuados y cuales no, a que hora puede consumirlos y como mantener su masa muscular y unicamente perder grasa.  
                                    </p>
                                    <p>
                                        Con este método podrá darse cuenta que puede llevar una vida normal, bajar de peso y medidas y no volverlos a subir.
                                    </p>
                                    <p>
                                        Durante el tratamiento lo apoyaremos y asesoraremos para que pueda llegar a la meta de la manera mas comoda posible.
                                    </p>
                                    <p>
                                        Si usted adquiere un hábito alimenticio evitará recuperar la grasa que perdió y podrá mantenerse en la talla con la que concluyó su tratamiento.
                                    </p>
                                    <Link  to='/ketodietarticle' >
                                            <li> 
                                                Si deseas conocer más acerca de este tipo de metodos ingresa aquí.
                                            </li>
                                    </Link>
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
                                
                                <p> { pie_cards } </p>
                            
                            </div>  
                        
                        
                    </div>
                            
    
                    </div>         
                </div>
            </div>
    )
}

export default HabitoDesign
