import React, { useState } from 'react'
import { FacebookShareButton, 
    FacebookIcon, 
    TwitterShareButton, 
    TwitterIcon, 
    WhatsappShareButton,
    WhatsappIcon,} from 'react-share'
import '..//../ComparteSocialMediaButtons/SocialMedia.css'

function SocialMediaOsteoarticularArticulo() {

    const [direccionArtOsteoarticulares] = useState ('http://www.obcityhealth.com/articulo_alteracionesosteoarticulares')
    const [notaArtOsteoarticulares] = useState ('Obesidad y Alteraciones Osteoarticulares')

    return (
        <div className='container-socialmedia'>
            <div className='titulo-comparte'>
                <h4>COMPARTE</h4>
            </div>
            <div className='comparte-socialmedia'>
                <FacebookShareButton
                    url={direccionArtOsteoarticulares}
                    quote={notaArtOsteoarticulares}
                    
                    >
                    <FacebookIcon 
                        size={30}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                        />
                </FacebookShareButton>

                <TwitterShareButton
                    url={direccionArtOsteoarticulares}
                    quote={notaArtOsteoarticulares}
                    >
                    <TwitterIcon
                        size={30}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                    />
                </TwitterShareButton>

                <WhatsappShareButton
                    url={direccionArtOsteoarticulares}
                    quote={notaArtOsteoarticulares}
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

export default SocialMediaOsteoarticularArticulo
