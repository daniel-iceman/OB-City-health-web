import React, { useState } from 'react'
import { FacebookShareButton, 
    FacebookIcon, 
    TwitterShareButton, 
    TwitterIcon, 
    WhatsappShareButton,
    WhatsappIcon,} from 'react-share'
import '..//../ComparteSocialMediaButtons/SocialMedia.css'

function SocialMediaInfluenzaArticulo() {

    const [direccionArtInfluenza] = useState ('http://www.obcityhealth.com/articulo_influenza')
    const [notaArtInfluenza] = useState ('Influenza y obesidad')

    return (
        <div className='container-socialmedia'>
            <div className='titulo-comparte'>
                <h4>COMPARTE</h4>
            </div>
            <div className='comparte-socialmedia'>
                <FacebookShareButton
                    url={direccionArtInfluenza}
                    quote={notaArtInfluenza}
                    
                    >
                    <FacebookIcon 
                        size={30}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                        />
                </FacebookShareButton>

                <TwitterShareButton
                    url={direccionArtInfluenza}
                    quote={notaArtInfluenza}
                    >
                    <TwitterIcon
                        size={30}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                    />
                </TwitterShareButton>

                <WhatsappShareButton
                    url={direccionArtInfluenza}
                    quote={notaArtInfluenza}
                    >
                    <WhatsappIcon 
                        size={30}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}/>
                </WhatsappShareButton>
            </div>
        </div>
    )
}

export default SocialMediaInfluenzaArticulo
