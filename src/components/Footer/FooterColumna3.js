import React from 'react'
/* import { Link } from 'react-router-dom' */

function FooterColumna3() {
    return (
        <div className='footer-contacto'>
            <div>
                <h1> Cambia tu vida </h1>
            </div>
            <div>
                <button>
                    {/* <Link className='opciones-footer'  to='/contacto' >
                        <li> 
                            Contáctanos
                        </li>
                    </Link> */}
                    <li
                        style={{listStyle:'none'}}>
                            
                        <a 
                            style={{color:'white', textDecoration:'none'}}
                            href="https://www.obcity.store/contacto-ob-city-web/">
                            Contacto
                        </a>
                    </li> 
                </button>

            </div>
            
        </div>
    )
}

export default FooterColumna3
