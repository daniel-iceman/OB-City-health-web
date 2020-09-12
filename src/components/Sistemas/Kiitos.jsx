import React, { useState }  from 'react'
import './Sistemas.css'
import KiitosDesign from './KiitosDesign'


function Kiitos() {

    const [intro_phrase] = useState ('Con este método dirás "Y pensar que hace 15 días usaba 1 talla más".')

    const [prfo_1] = useState ('Existen múltiples formas para perder grasa corporal y medidas, pero son pocos los que te ofrecen una adecuada nutrición.  ')
    const [prfo_2] = useState ('Perder 1 talla en 15 días no es imposible, con Kiitos lo podrás lograr, sin poner en riesgo tu salud.* ')
    const [prfo_3] = useState ('Toma 1 malteada Kiitos como único desayuno, comida y cena, y no solo perderás 1 talla en 15 días sino que además obtendrás una adecuada nutrición por su contenido en carbohidratos, grasas, proteínas, vitaminas y minerales.')
    const [prfo_4] = useState ('Disfruta de sus deliciosos sabores: Chocolate, Fresa, Vainilla, Chocoplatano y Capuchino.')

    const [pieCards] = useState ('* El tiempo y la pérdida de peso puede variar en cada persona dependiendo de como siga indicaciónes, calidad de actividad física y situaciones hormonales preexistentes.')

    return (
        <div>
            <KiitosDesign 
                kiitos_frase_inicial = { intro_phrase }
                kiitos_parrafo_1 = { prfo_1 }
                kiitos_parrafo_2 = { prfo_2 }
                kiitos_parrafo_3 = { prfo_3 }
                kiitos_parrafo_4 = { prfo_4 }
                pie_cards = { pieCards }
            />
        </div>
    )
}

export default Kiitos
