import React, { useState } from 'react'
import { FacebookShareButton, 
    FacebookIcon, 
    TwitterShareButton, 
    TwitterIcon, 
    WhatsappShareButton,
    WhatsappIcon,} from 'react-share'

import '..//ComparteSocialMediaButtons/SocialMedia.css'

function SocialMediaABCButtons() {
    const [direccionABC] = useState ('http://www.medicobariatra.com.mx/inicio/protocolo-abc/')
    const [notaABC] = useState ('Aqui agrego una nota')


    return (
        <div className='container-socialmedia'>
            <div className='titulo-comparte'>
                <h4>COMPARTE</h4>
            </div>
            <div className='comparte-socialmedia'>
                <FacebookShareButton
                    url={direccionABC}
                    quote={notaABC}
                    >
                    <FacebookIcon 
                        size={25}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                        />
                </FacebookShareButton>

                <TwitterShareButton
                    url={direccionABC}
                    quote={notaABC}
                    >
                    <TwitterIcon
                        size={25}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                    />
                </TwitterShareButton>

                <WhatsappShareButton
                    url={direccionABC}
                    quote={notaABC}
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

export default SocialMediaABCButtons