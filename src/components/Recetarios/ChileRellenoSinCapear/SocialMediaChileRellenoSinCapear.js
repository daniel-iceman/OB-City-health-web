import React, { useState }  from 'react'
import { FacebookShareButton, 
    FacebookIcon, 
    TwitterShareButton, 
    TwitterIcon, 
    WhatsappShareButton,
    WhatsappIcon,} from 'react-share'

import '..//..//ComparteSocialMediaButtons/SocialMedia.css'

function SocialMediaChileRellenoSinCapear() {

    const [chileRellenoSinCapear] = useState ('http://www.obcityhealth.com/chilerellenosincapear')
    const [notaChileRellenoSinCapear] = useState ('Chile relleno de queso sin capear')

    return (
        <div className='container-socialmedia'>
            <div className='titulo-comparte'>
                <h4>COMPARTE ESTA RECETA</h4>
            </div>
            <div className='comparte-socialmedia'>
                <FacebookShareButton
                    url={chileRellenoSinCapear}
                    quote={notaChileRellenoSinCapear}
                    >
                    <FacebookIcon 
                        size={30}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                        />
                </FacebookShareButton>

                <TwitterShareButton
                    url={chileRellenoSinCapear}
                    quote={notaChileRellenoSinCapear}
                    >
                    <TwitterIcon
                        size={30}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                    />
                </TwitterShareButton>

                <WhatsappShareButton
                    url={chileRellenoSinCapear}
                    quote={notaChileRellenoSinCapear}
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

export default SocialMediaChileRellenoSinCapear
