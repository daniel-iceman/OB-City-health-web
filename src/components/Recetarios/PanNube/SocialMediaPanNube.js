import React, { useState } from 'react'
import { FacebookShareButton, 
    FacebookIcon, 
    TwitterShareButton, 
    TwitterIcon, 
    WhatsappShareButton,
    WhatsappIcon,} from 'react-share'

import '..//..//ComparteSocialMediaButtons/SocialMedia.css'

function SocialMediaPanNube() {

    const [panNube] = useState ('http://www.obcityhealth.com/pannube')
    const [notaPanNube] = useState ('Pan Nube')

    return (
        <div className='container-socialmedia'>
            <div className='titulo-comparte'>
                <h4>COMPARTE ESTA RECETA</h4>
            </div>
            <div className='comparte-socialmedia'>
                <FacebookShareButton
                    url={panNube}
                    quote={notaPanNube}
                    >
                    <FacebookIcon 
                        size={30}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                        />
                </FacebookShareButton>

                <TwitterShareButton
                    url={panNube}
                    quote={notaPanNube}
                    >
                    <TwitterIcon
                        size={30}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                    />
                </TwitterShareButton>

                <WhatsappShareButton
                    url={panNube}
                    quote={notaPanNube}
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

export default SocialMediaPanNube
