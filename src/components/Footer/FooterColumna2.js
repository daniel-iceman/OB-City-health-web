import React from 'react'
import { Link } from 'react-router-dom'

function FooterColumna2(
    {
        titulo_Col_2,
        opcionLinkFoot1,
        opcionLinkFoot2,
        opcionLinkFoot3,
        opcionLinkFoot4,
        opcionLinkFoot5
    }
) {
    return (
        <div className='footer-menu'>
            <div>
                <h1> { titulo_Col_2 } </h1>
            </div>
            <nav>
                <ul>
                    <Link className='opciones-footer'  to='/servicios' >
                        <li> 
                            { opcionLinkFoot1 }
                        </li>
                    </Link>
                    <Link className='opciones-footer'  to='/sistemas' >
                        <li> 
                            { opcionLinkFoot2 }
                        </li>
                    </Link>
                    <Link className='opciones-footer'  to='/acerca' >
                        <li> 
                            { opcionLinkFoot3 }
                        </li>
                    </Link>
                    <Link className='opciones-footer'  to='/articulos' >
                        <li> 
                            { opcionLinkFoot4 }
                        </li>
                    </Link>
                    <Link className='opciones-footer'  to='/recetarios' >
                        <li> 
                            { opcionLinkFoot5 }
                        </li>
                    </Link>
                </ul>
            </nav>
            
        </div>
    )
}

export default FooterColumna2
