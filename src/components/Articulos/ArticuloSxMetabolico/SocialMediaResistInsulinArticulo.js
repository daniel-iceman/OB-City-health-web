import React, { useState } from 'react'
import { FacebookShareButton, 
    FacebookIcon, 
    TwitterShareButton, 
    TwitterIcon, 
    WhatsappShareButton,
    WhatsappIcon,} from 'react-share'
import '..//../ComparteSocialMediaButtons/SocialMedia.css'

function SocialMediaResistInsulinArticulo() {

    const [direccionArtResistenciaInsulina] = useState ('http://www.obcityhealth.com/articulo_resistenciainsulina')
    const [notaArtResistenciaInsulina] = useState ('Resistencia a la insulina y obesidad')

    return (
        <div className='container-socialmedia'>
            <div className='titulo-comparte'>
                <h4>COMPARTE</h4>
            </div>
            <div className='comparte-socialmedia'>
                <FacebookShareButton
                    url={direccionArtResistenciaInsulina}
                    quote={notaArtResistenciaInsulina}
                    
                    >
                    <FacebookIcon 
                        size={30}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                        />
                </FacebookShareButton>

                <TwitterShareButton
                    url={direccionArtResistenciaInsulina}
                    quote={notaArtResistenciaInsulina}
                    >
                    <TwitterIcon
                        size={30}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                    />
                </TwitterShareButton>

                <WhatsappShareButton
                    url={direccionArtResistenciaInsulina}
                    quote={notaArtResistenciaInsulina}
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

export default SocialMediaResistInsulinArticulo
