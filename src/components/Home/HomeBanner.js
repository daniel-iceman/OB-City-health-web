import React from 'react'
import './Home.css'

function HomeBanner({ tituloBanner, textoBanner }) {
    return (
        <div>
            <div className="header-imageHome" id='header'>
                <div className="header-overlayHome"></div>
            </div>   
            <div className='header-textHome'>
                <h1>{ tituloBanner }</h1>
                <p>{ textoBanner }</p>
            </div>         

        </div>
    )
}

export default HomeBanner
