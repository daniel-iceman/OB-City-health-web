import React, { useState }  from 'react'
import { FacebookShareButton, 
    FacebookIcon, 
    TwitterShareButton, 
    TwitterIcon, 
    WhatsappShareButton,
    WhatsappIcon,} from 'react-share'

import '..//ComparteSocialMediaButtons/SocialMedia.css'

function SocialMediaHabito() {

    const [direccionHabito] = useState ('http://www.medicobariatra.com.mx/inicio/h%C3%A1bito-alimenticio/')
    const [notaHabito] = useState ('Aqui agrego una nota')

    return (
        <div className='container-socialmedia'>
            <div className='titulo-comparte'>
                <h4>COMPARTE</h4>
            </div>
            <div className='comparte-socialmedia'>
                <FacebookShareButton
                    url={direccionHabito}
                    quote={notaHabito}
                    >
                    <FacebookIcon 
                        size={25}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                        />
                </FacebookShareButton>

                <TwitterShareButton
                    url={direccionHabito}
                    quote={notaHabito}
                    >
                    <TwitterIcon
                        size={25}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                    />
                </TwitterShareButton>

                <WhatsappShareButton
                    url={direccionHabito}
                    quote={notaHabito}
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

export default SocialMediaHabito
