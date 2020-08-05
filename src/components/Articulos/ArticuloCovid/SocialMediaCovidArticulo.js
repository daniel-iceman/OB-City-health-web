import React, { useState } from 'react'
import { FacebookShareButton, 
    FacebookIcon, 
    TwitterShareButton, 
    TwitterIcon, 
    WhatsappShareButton,
    WhatsappIcon,} from 'react-share'
import '..//../ComparteSocialMediaButtons/SocialMedia.css'

function SocialMediaCovidArticulo() {

    const [direccionArtCovid19] = useState ('http://www.obcityhealth.com/articulo_covid19')
    const [notaArtCovid19] = useState ('COVID-19 y obesidad')

    return (
        <div className='container-socialmedia'>
            <div className='titulo-comparte'>
                <h4>COMPARTE</h4>
            </div>
            <div className='comparte-socialmedia'>
                <FacebookShareButton
                    url={direccionArtCovid19}
                    quote={notaArtCovid19}
                    
                    >
                    <FacebookIcon 
                        size={30}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                        />
                </FacebookShareButton>

                <TwitterShareButton
                    url={direccionArtCovid19}
                    quote={notaArtCovid19}
                    >
                    <TwitterIcon
                        size={30}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                    />
                </TwitterShareButton>

                <WhatsappShareButton
                    url={direccionArtCovid19}
                    quote={notaArtCovid19}
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

export default SocialMediaCovidArticulo
