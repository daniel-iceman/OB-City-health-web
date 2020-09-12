import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock as regularClock } from "@fortawesome/free-regular-svg-icons";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";
import { faIceCream } from "@fortawesome/free-solid-svg-icons";
import SocialMediaChileRellenoSinCapear from './SocialMediaChileRellenoSinCapear';

function ChileRellenoSinCapear({
    titulo,
    ingrediente_1,
    ingrediente_2,
    ingrediente_3,
    ingrediente_4,
    ingrediente_5,
    ingrediente_6,
    ingrediente_7,
    ingrediente_8,
    ingrediente_9,
    ingrediente_10,
    ingrediente_11,
    ingrediente_12,
    procedimiento_1,
    procedimiento_2,
    procedimiento_3,
    procedimiento_4,
    procedimiento_5,
    procedimiento_6,
    procedimiento_7,
    procedimiento_8,
    procedimiento_9,
    procedimiento_10,
    procedimiento_11,
    procedimiento_12,
    procedimiento_13,
    caracteristica_1,
    caracteristica_2,
    caracteristica_3,
    caracteristica_4,
}) {
    return (
        <div className='container-receta'>        

            <div className='imagen-titulo-receta'>
                
                <div className='titulo-receta'>
                    <h1> { titulo } </h1>
                </div>
            </div>

            <SocialMediaChileRellenoSinCapear />

            <div className='contenedor-informacion-receta'>

                <div className='ingredientes-preparacion'>
                    <div className='ingredientes'>
                        <h2>INGREDIENTES</h2>
                        <li> { ingrediente_1 } </li>
                        <li> { ingrediente_2 } </li>
                        <li> { ingrediente_3 } </li>
                        <li> { ingrediente_4 } </li>
                        <li> { ingrediente_5 } </li>
                        <li> { ingrediente_6 } </li>
                        <li> { ingrediente_7 } </li>
                        <li> { ingrediente_8 } </li>
                        <li> { ingrediente_9 } </li>
                        <li> { ingrediente_10 } </li>
                        <li> { ingrediente_11 }  </li>
                        <li> { ingrediente_12 } </li>
                    </div>
                    <div className='preparacion'>
                        <h2>PREPARACIÓN</h2>
                        <p>
                            { procedimiento_1 } 
                        </p>
                        <p>
                            { procedimiento_2 }
                        </p>
                        <p>
                            { procedimiento_3 } 
                        </p>
                        <p>
                            { procedimiento_4 }
                        </p>
                        <p>
                            { procedimiento_5 }
                        </p>
                        <p>
                            { procedimiento_6 } 
                        </p>
                        <p>
                            { procedimiento_7 }
                        </p>
                        <p>
                            { procedimiento_8 } 
                        </p>
                        <p>
                            { procedimiento_9 }
                        </p>
                        <p>
                            { procedimiento_10 }
                        </p>
                        <p>
                            { procedimiento_11 } 
                        </p>
                        <p>
                            { procedimiento_12 }
                        </p>
                        <p>
                            { procedimiento_13 } 
                        </p>
                    </div>
                    <div className='regresar-recetarios-btn'>
                        <button>
                            <Link  to='/recetarios' >
                                <li>
                                    Regresar al menu de recetas
                                </li>
                            </Link>
                        </button>
                    </div>
                </div>

                <div className='imagen-propiedades'>
                    <div className='imagen-receta'>
                        <div className='foto chile-relleno-sincapear'></div>
                    </div>

                    <div className='propiedades-receta'>
                        <div className='tiempo-preparacion'>
                            <h5>
                                Tiempo de preparación
                            </h5>
                            <div className='tiempo-clasificacion'>
                                <FontAwesomeIcon 
                                    icon={regularClock} 
                                    style={{fontSize:'25px',
                                            color:'#eaa81b',
                                            marginLeft:'0px'}}/>
                                <FontAwesomeIcon 
                                    icon={regularClock} 
                                    style={{fontSize:'25px',
                                            color:'#eaa81b',
                                            marginLeft:'15px'}}/>
                                <FontAwesomeIcon 
                                    icon={regularClock} 
                                    style={{fontSize:'25px',
                                            color:'#eaa81b',
                                            marginLeft:'15px'}}/>
                            </div>
                            <p>
                                { caracteristica_1 }
                            </p>
                        </div>

                        <div className='versatilidad'>
                            <h5>
                                Versatilidad
                            </h5>
                            <div className='versatilidad-clasificacion'>
                                <FontAwesomeIcon 
                                    icon={faCloudSun} 
                                    style={{fontSize:'25px',
                                            color:'#eaa81b',
                                            marginLeft:'0px'}}/>
                                <FontAwesomeIcon 
                                    icon={faCloudSun} 
                                    style={{fontSize:'25px',
                                            color:'#eaa81b',
                                            marginLeft:'15px'}}/>
                                <FontAwesomeIcon 
                                    icon={faCloudSun} 
                                    style={{fontSize:'25px',
                                            color:'#eaa81b',
                                            marginLeft:'15px'}}/>
                            </div>
                            <p>
                                { caracteristica_2 }
                            </p>
                        </div>

                        <div className='nutricion'>
                            <h5>
                                Balance Nutricional
                            </h5>
                            <div className='nutricion-clasificacion'>
                                <FontAwesomeIcon 
                                    icon={faBalanceScale} 
                                    style={{fontSize:'25px',
                                            color:'#eaa81b',
                                            marginLeft:'0px'}}/>
                                <FontAwesomeIcon 
                                    icon={faBalanceScale} 
                                    style={{fontSize:'25px',
                                            color:'#eaa81b',
                                            marginLeft:'15px'}}/>
                                <FontAwesomeIcon 
                                    icon={faBalanceScale} 
                                    style={{fontSize:'25px',
                                            color:'#eaa81b',
                                            marginLeft:'15px'}}/>
                            </div>
                            <p>
                                { caracteristica_3 }
                            </p>
                        </div>

                        <div className='carbos'>
                            <h5>
                                Contenido de carbohidratos
                            </h5>
                            <div className='carbos-clasificacion'>
                                <FontAwesomeIcon 
                                    icon={ faIceCream } 
                                    style={{fontSize:'25px',
                                            color:'#eaa81b',
                                            marginLeft:'0px'}}/>
                            </div>
                            <p>
                                { caracteristica_4 }
                            </p>
                        </div>
                    


                    </div>

                </div>

            </div>
        </div>
    )
}

export default ChileRellenoSinCapear
