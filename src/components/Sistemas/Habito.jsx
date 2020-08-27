import React, { useState } from 'react'
import './Sistemas.css'
import HabitoDesign from './HabitoDesign'

function Habito() {

    const [intro_phrase] = useState ('Después de terminar el tratamiento, no volveras a subir.')

    const [prfo_1] = useState ('Aprender a comer es la base del éxito.    Recuerde que comer sano no está peleado con comer rico.')
    const [prfo_2] = useState ('No es una dieta de calorías, ni tampoco le pediré que pese sus alimentos o cuente puntos.  Simplemente tendrá que aprender qué alimentos son adecuados y cuáles no, a qué hora puede consumirlos y cómo mantener su masa muscular y unicamente perder grasa.')
    const [prfo_3] = useState ('Con este método podrá darse cuenta que puede llevar una vida normal, bajar de peso y medidas y no volverlos a subir.')
    const [prfo_4] = useState ('Durante el tratamiento lo apoyaremos y asesoraremos para que pueda llegar a la meta de la manera mas comoda posible.')
    const [prfo_5] = useState ('Si usted adquiere un hábito alimenticio evitará recuperar la grasa que perdió y podrá mantenerse en la talla con la que concluyó su tratamiento.')

    return (
        <div>
            <HabitoDesign 
                habito_frase_inicial = { intro_phrase }
                habito_parrafo_1 = { prfo_1 }
                habito_parrafo_2 = { prfo_2 }
                habito_parrafo_3 = { prfo_3 }
                habito_parrafo_4 = { prfo_4 } 
                habito_parrafo_5 = { prfo_5 } 
            
            />
            
        </div>
    )
}

export default Habito
