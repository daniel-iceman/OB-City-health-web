import React, { useState } from 'react'
import { FacebookShareButton, 
    FacebookIcon, 
    TwitterShareButton, 
    TwitterIcon, 
    WhatsappShareButton,
    WhatsappIcon,} from 'react-share'

import '..//ComparteSocialMediaButtons/SocialMedia.css'

function CovidSocialMedia() {

    const [direccionHome] = useState ('http://www.obcityhealth.com/covid19')
    const [nota] = useState ('Aqui agrego una nota')

    return (
        <div className='container-socialmedia'>
            <div className='titulo-comparte'>
                <h4>COMPARTE</h4>
            </div>
            <div className='comparte-socialmedia'>
                <FacebookShareButton
                    url={direccionHome}
                    quote={nota}
                    >
                    <FacebookIcon 
                        size={25}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                        />
                </FacebookShareButton>

                <TwitterShareButton
                    url={direccionHome}
                    quote={nota}
                    >
                    <TwitterIcon
                        size={25}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                    />
                </TwitterShareButton>

                <WhatsappShareButton
                    url={direccionHome}
                    quote={nota}
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

export default CovidSocialMedia
