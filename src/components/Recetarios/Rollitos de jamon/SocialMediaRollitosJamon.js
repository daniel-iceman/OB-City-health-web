import React, { useState } from 'react'
import { FacebookShareButton, 
    FacebookIcon, 
    TwitterShareButton, 
    TwitterIcon, 
    WhatsappShareButton,
    WhatsappIcon,} from 'react-share'

import '..//..//ComparteSocialMediaButtons/SocialMedia.css'

function SocialMediaRollitosJamon() {

    const [rollitosJamon] = useState ('http://www.obcityhealth.com/rollitosjamon')
    const [notaRollitosJamon] = useState ('Rollitos de jamón con lechuga')

    return (
        <div className='container-socialmedia'>
            <div className='titulo-comparte'>
                <h4>COMPARTE ESTA RECETA</h4>
            </div>
            <div className='comparte-socialmedia'>
                <FacebookShareButton
                    url={rollitosJamon}
                    quote={notaRollitosJamon}
                    >
                    <FacebookIcon 
                        size={25}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                        />
                </FacebookShareButton>

                <TwitterShareButton
                    url={rollitosJamon}
                    quote={notaRollitosJamon}
                    >
                    <TwitterIcon
                        size={25}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                    />
                </TwitterShareButton>

                <WhatsappShareButton
                    url={rollitosJamon}
                    quote={notaRollitosJamon}
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

export default SocialMediaRollitosJamon
