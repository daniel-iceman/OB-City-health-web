import React from 'react'
import './Articulos.css'
import { Link } from 'react-router-dom'

function Articulos() {
    return (
        <div className='container-articulos'>

            {/* <div className='banner-articulos'> */}
                <div className='imagen-articulos'>
                    <h1>
                        Artículos
                    </h1>
                </div>
            {/* </div> */}

            <div className='contenedor-titulos-articulos'>

                <div className='titulos-container'>
                    {/* <button> */}
                        <Link   to='/articulo_covid19' >
                            <li> 
                                Obesidad y CoViD-19
                            </li>
                        </Link>
                    {/* </button> */}
                </div>

            </div>
            
            
        </div>
    )
}

export default Articulos
