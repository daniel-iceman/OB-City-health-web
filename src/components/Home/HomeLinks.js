import React from 'react'
import './HomeLinks.css'
import { Link } from 'react-router-dom'

function HomeLinks() {
    return (

        <div className='container-homeLinks'>
            <div className='bloque-1'>
                <div className='linkHome-1'>
                    <div>
                        <button>
                            <Link className='btn-vermas'  to='/sistemas' >
                                <li> 
                                    Ver más.
                                </li>
                            </Link>
                        </button>
                    </div>
                    <Link to='/sistemas' >
                        <li> 
                            Elige tu plan
                        </li>
                    </Link>                    
                </div>    
                
                
                <div className='linkHome-2'>
                    <div>
                        <button>
                            <Link className='btn-vermas'  to='/exitos' >
                                <li> 
                                    Ver más.
                                </li>
                            </Link>
                        </button>
                    </div>
                    <Link to='/exitos' >
                        <li> 
                            Casos de éxito
                        </li>
                    </Link>  
                </div>
                

            </div>          

            <div className='bloque-2'>
                <div className='linkHome-3'>
                    <div>
                        <button>
                            <Link className='btn-vermas'  to='/covid19'>
                                <li> 
                                    Ver más.
                                </li>
                            </Link>
                        </button>
                    </div>
                    <Link to='/covid19' >
                        <li> 
                            CoViD-19 y obesidad
                        </li>
                    </Link> 
                </div>
            </div>

            <div className='bloque-3'>
                <div className='linkHome-4'>
                    <div>
                        <button>
                            <Link className='btn-vermas'  to='/articulos' >
                                <li> 
                                    Ver más.
                                </li>
                            </Link>
                        </button>
                    </div>
                    <Link to='/articulos' >
                        <li> 
                            Articulos
                        </li>
                    </Link>
                </div>

                <div className='linkHome-5'>
                    <div>
                        <button>
                            <Link className='btn-vermas'  to='/recetarios' >
                                <li> 
                                    Ver más.
                                </li>
                            </Link>
                        </button>
                    </div>
                    <Link to='/recetarios' >
                        <li> 
                            Recetarios
                        </li>
                    </Link>
                </div>

                <div className='linkHome-6'>
                    <div>
                        <button>
                            <Link className='btn-vermas'  to='/emocionesyalimentacion' >
                                <li> 
                                    Ver más.
                                </li>
                            </Link>
                        </button>
                    </div>                
                    <Link to='/emocionesyalimentacion' >
                        <li> 
                            Comida y emociones
                        </li>
                    </Link>
                </div>
            </div>
            
        </div>

    )
}

export default HomeLinks
