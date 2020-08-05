import React, { useState } from 'react'
import { FacebookShareButton, 
    FacebookIcon, 
    TwitterShareButton, 
    TwitterIcon, 
    WhatsappShareButton,
    WhatsappIcon,} from 'react-share'
import '..//../ComparteSocialMediaButtons/SocialMedia.css'

function SocialMediaEmbarazoArticulo() {

    const [direccionArtEmbarazo] = useState ('http://www.obcityhealth.com/articulo_embarazo')
    const [notaArtEmbarazo] = useState ('Embarazo y obesidad')

    return (
        <div className='container-socialmedia'>
            <div className='titulo-comparte'>
                <h4>COMPARTE</h4>
            </div>
            <div className='comparte-socialmedia'>
                <FacebookShareButton
                    url={direccionArtEmbarazo}
                    quote={notaArtEmbarazo}
                    
                    >
                    <FacebookIcon 
                        size={30}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                        />
                </FacebookShareButton>

                <TwitterShareButton
                    url={direccionArtEmbarazo}
                    quote={notaArtEmbarazo}
                    >
                    <TwitterIcon
                        size={30}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                    />
                </TwitterShareButton>

                <WhatsappShareButton
                    url={direccionArtEmbarazo}
                    quote={notaArtEmbarazo}
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

export default SocialMediaEmbarazoArticulo
