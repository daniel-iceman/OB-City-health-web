import React, { useEffect } from 'react'
import './Servicios.css'
import SistemasBanner from './SistemasBanner'
import RecetariosBanner from './RecetariosBanner'
import TelemedicinaBanner from './TelemedicinaBanner'
import PriseBanner from './PriseBanner'

function Servicios() {
    
    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div className='container-servicios' >
            <SistemasBanner/>
            <RecetariosBanner />
            <TelemedicinaBanner />
            <PriseBanner />
        </div>
    )
}

export default Servicios
