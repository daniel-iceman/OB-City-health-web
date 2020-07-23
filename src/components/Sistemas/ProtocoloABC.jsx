import React, { useState } from 'react'
import './Sistemas.css'
import ProtocoloABCDesign from './ProtocoloABCDesign'

function ProtocoloABC() {

    const [intro_phrase] = useState ('Tu cuerpo perderá grasa corporal y tu masa muscular se mantendrá intacta.')

    const [prfo_1] = useState ('El término “Keto Diet” viene de “ketogenic diet” (dieta cetogénica) lo cual se refiere a que esta provoca que el cuerpo produzca pequeñas moléculas de combustible llamadas “cetonas”.     Estas son una alternativa de combustible para el cuerpo que se usan cuando los aportes de glucosa (azúcar) en la dieta son bajos.')
    
    const [pieCards] = useState ('* El tiempo y la pérdida de peso puede variar en cada persona dependiendo de como siga indicaciónes, calidad de actividad física y situaciones hormonales preexistentes.')
    
    return (
        <div>
            <ProtocoloABCDesign     
                abc_frase_inicial = { intro_phrase }   
                abc_parrafo_1 = { prfo_1 }         
                pie_cards = { pieCards }
            />           
        </div>
    )
}

export default ProtocoloABC
