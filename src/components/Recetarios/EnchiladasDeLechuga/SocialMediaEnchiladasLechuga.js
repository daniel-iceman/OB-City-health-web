import React, { useState }  from 'react'
import { FacebookShareButton, 
    FacebookIcon, 
    TwitterShareButton, 
    TwitterIcon, 
    WhatsappShareButton,
    WhatsappIcon,} from 'react-share'

import '..//..//ComparteSocialMediaButtons/SocialMedia.css'


function SocialMediaEnchiladasLechuga() {

    const [enchiladasLechuga] = useState ('http://www.obcityhealth.com/enchiladasdelechuga')
    const [notaEnchiladasLechuga] = useState ('Aqui agrego una nota')

    return (
        <div className='container-socialmedia'>
            <div className='titulo-comparte'>
                <h4>COMPARTE ESTA RECETA</h4>
            </div>
            <div className='comparte-socialmedia'>
                <FacebookShareButton
                    url={enchiladasLechuga}
                    quote={notaEnchiladasLechuga}
                    >
                    <FacebookIcon 
                        size={30}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                        />
                </FacebookShareButton>

                <TwitterShareButton
                    url={enchiladasLechuga}
                    quote={notaEnchiladasLechuga}
                    >
                    <TwitterIcon
                        size={30}
                        round={true}
                        bgStyle={{fill:'#c7b198'}}
                    />
                </TwitterShareButton>

                <WhatsappShareButton
                    url={enchiladasLechuga}
                    quote={notaEnchiladasLechuga}
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

export default SocialMediaEnchiladasLechuga
