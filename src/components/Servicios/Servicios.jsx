import React, { useEffect } from 'react'
import './Servicios.css'
import SistemasBanner from './SistemasBanner'
import RecetariosBanner from './RecetariosBanner'
import TelemedicinaBanner from './TelemedicinaBanner'
import PriseBanner from './PriseBanner'
import TiendaBanner from './TiendaBanner'

function Servicios() {
    
    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div className='container-servicios' >
            <TelemedicinaBanner />
            <SistemasBanner/>
            <TiendaBanner/>
            <RecetariosBanner />            
            <PriseBanner />
        </div>
    )
}

export default Servicios
