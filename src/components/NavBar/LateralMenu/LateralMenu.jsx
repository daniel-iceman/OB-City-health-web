import React, { useState } from 'react'
import './LateralMenu.css'
import MenuDesplegable from './MenuDesplegable';

function LateralMenu() {

    // MENU LATERAL
    const [menuLateral1] = useState('Inicio')
    const [menuLateral2] = useState('Servicios')
    const [menuLateral3] = useState('Acerca de')
    const [menuLateral4] = useState('Articulos')
    const [menuLateral5] = useState('Contacto')
        
    return (
        <div>
            <MenuDesplegable 
                opcion1={menuLateral1}
                opcion2={menuLateral2}
                opcion3={menuLateral3}
                opcion4={menuLateral4}
                opcion5={menuLateral5}
            />
                        
        </div>
    )
}

export default LateralMenu
