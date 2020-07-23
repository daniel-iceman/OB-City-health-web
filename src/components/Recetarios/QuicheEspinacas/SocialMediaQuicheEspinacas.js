import React, { useState } from 'react'
import { FacebookShareButton, 
    FacebookIcon, 
    TwitterShareButton, 
    TwitterIcon, 
    WhatsappShareButton,
    WhatsappIcon,} from 'react-share'

import '..//..//ComparteSocialMediaButtons/SocialMedia.css'

function SocialMediaQuicheEspinacas() {

    const [quicheEspinacas] = useState ('http://www.obcityhealth.com/quicheespinacas')
    const [notaQuicheEspinacas] = useState ('QUICHÉ DE ESPINACAS LIGHT')

    return (
        <div className='container-socialmedia'>
            <div className='titulo-comparte'>
                <h4>COMPARTE ESTA RECETA</h4>
            </div>
            <div className='comparte-socialmedia'>
                <FacebookShareButton
                    url={quicheEspinacas}
                    quote={notaQuicheEspinacas}
                    >
                    <FacebookIcon 
                        size={25}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                        />
                </FacebookShareButton>

                <TwitterShareButton
                    url={quicheEspinacas}
                    quote={notaQuicheEspinacas}
                    >
                    <TwitterIcon
                        size={25}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                    />
                </TwitterShareButton>

                <WhatsappShareButton
                    url={quicheEspinacas}
                    quote={notaQuicheEspinacas}
                    >
                    <WhatsappIcon 
                        size={25}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}/>
                </WhatsappShareButton>
            </div>
        </div>
    )
}

export default SocialMediaQuicheEspinacas
