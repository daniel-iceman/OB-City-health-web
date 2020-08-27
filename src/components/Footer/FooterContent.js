import React, { useState } from 'react'
import FooterSocialMedia from './FooterSocialMedia'
import FooterColumna1 from './FooterColumna1'
import FooterColumna2 from './FooterColumna2'
import FooterColumna3 from './FooterColumna3'
import FooterPie from './FooterPie'

function FooterContent() {
    // Contenido de barra superior redes sociales
    const [linkFacebook] = useState ('https://www.facebook.com/OB-City-health-307053883086139')
    const [linkTwitter] = useState ('https://twitter.com/obcityhealth')
    const [linkInstagram] = useState ('https://www.instagram.com/obcityhealth/')
    const [linkYoutube] = useState ('https://www.youtube.com/channel/UC7Q9OlV7NvMBhUUN_Ics4NQ')

    // Contenido de columna 1
    const [tituloC1] = useState ('Acerca')
    const [textoC1] = useState ('OB City health es vanguardia en atención médica para la obesidad.')
    const [terms] = useState ('Términos y condiciones')
    const [priv] = useState ('Aviso de privacidad')

    // Contenido de columna 2
    const [titulolink] = useState ('Conoce')
    const [fLink1] = useState ('Servicios') 
    const [fLink2] = useState ('Sistemas')
    const [fLink3] = useState ('Acerca de')
    const [fLink4] = useState ('Artículos')
    const [fLink5] = useState ('Recetarios') 


    return (
        <div className='container-footer'>
            <div className='footer-image'>
                <div className='footer-overlay'></div>
            </div>

            <div className='footer-informacion'>

                <div className='footer-encabezado'>
                    <FooterSocialMedia 
                        facebook={linkFacebook}
                        twitter={linkTwitter}
                        instagram={linkInstagram}
                        youtube={linkYoutube}
                        /> 
                </div>

                <div className='footer-body'>
                    <div className='footer-columna1'>
                        <FooterColumna1 
                            titulo_Col_1={tituloC1}
                            texto_Col_1={textoC1}
                            terminos={terms}
                            privacidad={priv}
                        /> 
                    </div>
                    
                    <div className='footer-columna2'>
                        <FooterColumna2 
                            titulo_Col_2={titulolink}
                            opcionLinkFoot1={fLink1}
                            opcionLinkFoot2={fLink2}
                            opcionLinkFoot3={fLink3}
                            opcionLinkFoot4={fLink4}
                            opcionLinkFoot5={fLink5}
                        /> 
                    </div>
                    <div className='footer-columna3'>
                        <FooterColumna3 />
                    </div>
                </div>

                <div className='footer-pie'>
                    <FooterPie />
                </div>

            </div>
        </div>
    )
}

export default FooterContent
