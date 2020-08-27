import React, { useState } from 'react'
import './Sistemas.css'
import ProtocoloABCDesign from './ProtocoloABCDesign'

function ProtocoloABC() {

    const [intro_phrase] = useState ('Tu cuerpo perderá grasa corporal y tu masa muscular se mantendrá intacta.')

    const [prfo_1] = useState ('El término “Keto Diet” viene de “ketogenic diet” (dieta cetogénica) lo cual se refiere a que ésta provoca que el cuerpo produzca pequeñas moléculas de combustible llamadas “cetonas”.     Éstas son una alternativa de combustible para el cuerpo que se usan cuando los aportes de glucosa (azúcar) en la dieta son bajos.')
    const [prfo_2] = useState ('Las cetonas son producidas en el hígado a partir de la grasa corporal y éstas, a su vez son usadas como combustible en el cuerpo.')
    const [prfo_3] = useState ('Este método consiste en el consumo de una malteada baja en carbohidratos y rica en proteínas en el desayuno y la cena. Durante la comida consumirá alimentos balanceados, reduciendo la ingesta de carbohidratos. De esta forma, obtendrá resultados más rápidos en la pérdida de grasa corporal y medidas.')
    const [prfo_4] = useState ('Aprenda a balancear sus alimentos de forma adecuada.      Este es un metodo económico, práctico y seguro que le ayudará a alcanzar sus metas en un corto plazo.')
    
    const [pieCards] = useState ('* El tiempo y la pérdida de peso puede variar en cada persona dependiendo de como siga indicaciónes, calidad de actividad física y situaciones hormonales preexistentes.')
    
    return (
        <div>
            <ProtocoloABCDesign     
                abc_frase_inicial = { intro_phrase }   
                abc_parrafo_1 = { prfo_1 }  
                abc_parrafo_2 = { prfo_2 }  
                abc_parrafo_3 = { prfo_3 }  
                abc_parrafo_4 = { prfo_4 }   
                pie_cards = { pieCards }
            />           
        </div>
    )
}

export default ProtocoloABC
