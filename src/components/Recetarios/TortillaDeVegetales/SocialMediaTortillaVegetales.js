import React, { useState } from 'react'
import { FacebookShareButton, 
    FacebookIcon, 
    TwitterShareButton, 
    TwitterIcon, 
    WhatsappShareButton,
    WhatsappIcon,} from 'react-share'

import '..//..//ComparteSocialMediaButtons/SocialMedia.css'

function SocialMediaTortillaVegetales() {

    const [tortillaVegetales] = useState ('http://www.obcityhealth.com/tortilladevegetales')
    const [notaTortillaVegetales] = useState ('Aqui agrego una nota')

    return (
        <div className='container-socialmedia'>
            <div className='titulo-comparte'>
                <h4>COMPARTE ESTA RECETA</h4>
            </div>
            <div className='comparte-socialmedia'>
                <FacebookShareButton
                    url={tortillaVegetales}
                    quote={notaTortillaVegetales}
                    >
                    <FacebookIcon 
                        size={25}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                        />
                </FacebookShareButton>

                <TwitterShareButton
                    url={tortillaVegetales}
                    quote={notaTortillaVegetales}
                    >
                    <TwitterIcon
                        size={25}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                    />
                </TwitterShareButton>

                <WhatsappShareButton
                    url={tortillaVegetales}
                    quote={notaTortillaVegetales}
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

export default SocialMediaTortillaVegetales
