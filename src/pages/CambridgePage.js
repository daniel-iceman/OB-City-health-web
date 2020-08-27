import React, { Component } from 'react'
import Cambridge from '../components/Sistemas/Cambridge'
// import MetaTags from 'react-meta-tags'

export class CambridgePage extends Component {
    render() {
        return (
            <div>
{/* 
                <div className="wrapper">
                    <MetaTags>
                            <title>OB City health</title>
                            <meta property="og:title" content="Nuestros Metodos" />
                            <meta name="og:description" content="Cambridge Weight Plan 1to1." />
                            <meta property="og:image" content="../Images/Cambridge.png" />
                            <meta property="og:url" content="http://www.obcityhealth.com/inicio/cambridge-weight-plan/" />
                    </MetaTags>
                </div> */}

                <Cambridge />                
            </div>
        )
    }
}

export default CambridgePage
