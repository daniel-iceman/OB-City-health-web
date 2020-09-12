import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

function ConsejosDesign({
    tituloPag,
    consejo_1,
    consejo_2,
    consejo_3,
    consejo_4,
    consejo_5,
    consejo_6,
    consejo_7,
    consejo_8,
    consejo_9,
    consejo_10,
}) {
    return (
        <div className='container-consejos'>
            <div className='header-consejos'>
                <h1> { tituloPag } </h1>
            </div>

            <div className='block-consejos'>
                
                <div className='consejo-section'>
                    <FontAwesomeIcon 
                        icon={ faLightbulb } 
                        fixedWidth 
                        className='FontAwseomeConsejo'/>
                    <p>
                        { consejo_10 }
                    </p>                        
                </div>

                <div className='consejo-section'>
                    <FontAwesomeIcon 
                        icon={ faLightbulb } 
                        fixedWidth 
                        className='FontAwseomeConsejo'/>
                    <p>
                        { consejo_9 }
                    </p>
                </div>

                <div className='consejo-section'>
                    <FontAwesomeIcon 
                        icon={ faLightbulb } 
                        fixedWidth 
                        className='FontAwseomeConsejo'/>
                    <p>
                        { consejo_8 }
                    </p>
                </div>

                <div className='consejo-section'>
                    <FontAwesomeIcon 
                        icon={ faLightbulb } 
                        fixedWidth 
                        className='FontAwseomeConsejo'/>
                    <p>
                        { consejo_7 }
                    </p>
                </div>

                <div className='consejo-section'>
                    <FontAwesomeIcon 
                        icon={ faLightbulb } 
                        fixedWidth 
                        className='FontAwseomeConsejo'/>
                    <p>
                        { consejo_6 }
                    </p>
                </div>

                <div className='consejo-section'>
                    <FontAwesomeIcon 
                        icon={ faLightbulb } 
                        fixedWidth 
                        className='FontAwseomeConsejo'/>
                    <p>
                        { consejo_5 }
                    </p>
                </div>

                <div className='consejo-section'>
                    <FontAwesomeIcon 
                        icon={ faLightbulb } 
                        fixedWidth 
                        className='FontAwseomeConsejo'/>
                    <p>
                        { consejo_4 }
                    </p>
                </div>

                <div className='consejo-section'>
                    <FontAwesomeIcon 
                        icon={ faLightbulb } 
                        fixedWidth 
                        className='FontAwseomeConsejo'/>
                    <p>
                        { consejo_3 }
                    </p>
                </div>

                <div className='consejo-section'>
                    <FontAwesomeIcon 
                        icon={ faLightbulb } 
                        fixedWidth 
                        className='FontAwseomeConsejo'/>
                    <p>
                        { consejo_2 }
                    </p>
                </div>

                <div className='consejo-section'>
                    <FontAwesomeIcon 
                        icon={ faLightbulb } 
                        fixedWidth 
                        className='FontAwseomeConsejo'/>
                    <p>
                        { consejo_1 }
                    </p>
                </div>

            </div>
            
        </div>
    )
}

export default ConsejosDesign

