import React from 'react'
import { Link } from 'react-router-dom'

function FooterColumna1({ 
    titulo_Col_1, 
    texto_Col_1,
    terminos,
    privacidad
 }) {
    return (
        <div className='columna-1F'>
            <div className='footer-logo-obcity'></div>
            <div>
                <h1>{ titulo_Col_1 }</h1>
                <h2>{ texto_Col_1 }</h2>
            </div>
            <div className='terminos-privacidad'>
                <nav>
                    <ul>
                        
                        <li> 
                            <a href='https://myappterms.com/reader.php?id=100'>
                                Política de privacidad
                            </a>
                        </li>
                                             
                    </ul>
                </nav>
            </div>
            
        </div>
    )
}

export default FooterColumna1
