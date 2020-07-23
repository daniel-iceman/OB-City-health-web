import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";

function FooterSocialMedia({ facebook, twitter, instagram, youtube }) {
    return (
        <div className='social-media'>
            
            <ul>
                <li><a href={ facebook } > <FontAwesomeIcon className='fontawsome-footer' icon={ faFacebookSquare } style={{marginRight:'0px'}} /> </a></li>
                <li><a href={ twitter } > <FontAwesomeIcon icon={ faTwitterSquare } style={{marginRight:'0px'}} /> </a></li>
                <li><a href={ instagram } > <FontAwesomeIcon icon={ faInstagramSquare } style={{marginRight:'0px'}} /> </a></li>
                <li><a href={ youtube } > <FontAwesomeIcon icon={ faYoutubeSquare } style={{marginRight:'0px'}} /> </a></li>
            </ul>

                        
        </div>
    )
}

export default FooterSocialMedia
