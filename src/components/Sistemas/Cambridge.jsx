import React, { useState } from 'react'
import './Sistemas.css'
import CambridgeDesign from './CambridgeDesign'

function Cambridge() {

    const [pieCards] = useState ('* El tiempo y la pérdida de peso puede variar en cada persona dependiendo de como siga indicaciónes, calidad de actividad física y situaciones hormonales preexistentes.')
    
    return (
        <div>
            <CambridgeDesign 
                pie_cards = { pieCards }
            />
            
        </div>
    )
}

export default Cambridge
