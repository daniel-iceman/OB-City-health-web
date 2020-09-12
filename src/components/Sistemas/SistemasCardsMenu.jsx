import React, { useState, useEffect } from 'react'
import './SistemasCards.css'
import SistemasCards from './SistemasCards'

function SistemasCardsMenu() {

    useEffect(() => {
        window.scroll(0,0)
      });

    const [titCards] = useState ('Nuestros Sistemas')
    const [txtCards] = useState ('Contamos con 2 sistemas para ayudarte a llegar a la meta y 1 sistema para evitar que recuperes el peso y grasa perdidos durante el tratamiento.')
    const [pieCards] = useState ('* El tiempo y la pérdida de peso puede variar en cada persona dependiendo de como siga indicaciónes, calidad de actividad física y situaciones hormonales preexistentes.')
    const [btnCards] = useState ('Descubre más')

    const [abc_li_1] = useState('Económico')
    const [abc_li_2] = useState('Balanceado.')
    const [abc_li_3] = useState('Pérdida de 1 talla por mes.*')
    const [abc_li_4] = useState('1 malteada desayuno y cena.')
    const [abc_li_5] = useState('Reduce consumo de carbos.')

    const [kiitos_li_1] = useState('Práctico.')
    const [kiitos_li_2] = useState('Balanceado.')
    const [kiitos_li_3] = useState('Pérdida de 1 talla en 15 días.*')
    const [kiitos_li_4] = useState('1 malteada 3 veces al día.')
    const [kiitos_li_5] = useState('Dieta muy baja en calorías.')

    const [cambridge_li_1] = useState('Método Británico')
    const [cambridge_li_2] = useState('Balanceado.')
    const [cambridge_li_3] = useState('Pérdida de 1 talla en 15 días.*')
    const [cambridge_li_4] = useState('1 malteada 3 veces al día.')
    const [cambridge_li_5] = useState('Dieta muy baja en calorías.')

    const [habito_li_1] = useState('Aprende a comer.')
    const [habito_li_2] = useState('Balanceado.')
    const [habito_li_3] = useState('Sin pesar ni contar.')
    const [habito_li_4] = useState('En cualquier lugar.')
    const [habito_li_5] = useState('No vuelves a subir.')


    return (
        <div>
            <SistemasCards 
                titulo_sistemas = { titCards }
                texto_sistemas = { txtCards }
                pie_cards = { pieCards }
                boton_cards = { btnCards }
                abc_vineta_1 = { abc_li_1 }
                abc_vineta_2 = { abc_li_2 }
                abc_vineta_3 = { abc_li_3 }
                abc_vineta_4 = { abc_li_4 }
                abc_vineta_5 = { abc_li_5 }
                kiitos_vineta_1 = { kiitos_li_1 }
                kiitos_vineta_2 = { kiitos_li_2 }
                kiitos_vineta_3 = { kiitos_li_3 }
                kiitos_vineta_4 = { kiitos_li_4 }
                kiitos_vineta_5 = { kiitos_li_5 }
                cambridge_vineta_1 = { cambridge_li_1 }
                cambridge_vineta_2 = { cambridge_li_2 }
                cambridge_vineta_3 = { cambridge_li_3 }
                cambridge_vineta_4 = { cambridge_li_4 }
                cambridge_vineta_5 = { cambridge_li_5 }
                habito_vineta_1 = { habito_li_1 }
                habito_vineta_2 = { habito_li_2 }
                habito_vineta_3 = { habito_li_3 }
                habito_vineta_4 = { habito_li_4 }
                habito_vineta_5 = { habito_li_5 }
            />
        </div>
    )
}

export default SistemasCardsMenu
