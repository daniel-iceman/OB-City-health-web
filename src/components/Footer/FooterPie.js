import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function FooterPie() {
    return (
        <div className='footer-piepagina'>
            <h3>Copyright 
                <span><FontAwesomeIcon icon={faCopyright}  /></span>
                 2020 OB City health.  All Rights Reserved.</h3>
            <h4>Performed by Dr. Daniel Díaz</h4>
            
        </div>
    )
}

export default FooterPie
