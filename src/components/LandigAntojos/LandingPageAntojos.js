import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './LandingPageAntojos.css'

function LandingPageAntojos() {
    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div className='landingPage-antojos-container'>
            <div className='base-landingPage-antojos'>
                <h1> Hola </h1>
            </div>          
            
        </div>
    )
}

export default LandingPageAntojos
