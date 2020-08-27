import React, { useState } from 'react'
import './Sistemas.css'
import CambridgeDesign from './CambridgeDesign'

function Cambridge() {

    const [intro_phrase] = useState ('Nuestro metodo estrella.  No podrás creer los resultados.')

    const [prfo_1] = useState ('Aprender a llevar una buena alimentación es básico.  Sin embargo existen situaciones apremiantes que nos obligan a encontrar resultados en un tiempo mucho menor.  ')
    const [prfo_2] = useState ('El programa Sole Source Plus® de Cambridge Weight Plan® es recomendado sólo para personas con un IMC mayor a 25.')
    const [prfo_3] = useState ('El programa Cambridge Weight Plan®  Sole Source Plus® te permite una mayor flexibilidad. Este programa consiste en tres sobres del Cambridge Weight Plan (que serán tu desayuno, comida y cena). ')
    const [prfo_4] = useState ('Cambridge Weight Plan® puede ser utilizado por personas que padezcan enfermedades como hipertensión y diabetes con seguridad; así como por cualquier persona que desee obtener resultados rápidos y seguros que no pongan en riesgo su salud.*')
    const [prfo_5] = useState ('Este paso debe ser utilizado durante un máximo de doce semanas (de acuerdo con la Guía de NICE de 2006).   Después tendrá que pasar a un plan bajo en carbohidratos y rico en proteinas (tomando una comida practicamente normal a medio día y un par de malteadas en desayuno y cena) durante aproximadamente 1 mes.   Estando en este punto, si aun requiere bajar de peso y deseas continuar con este programa, puede reiniciar  Sole Source Plus® por otro periodo de 1 a doce semanas o escoger otro programa con un contenido calórico mayor.   Y después... ¡a disfrutar los resultados!.')

    const [pieCards] = useState ('* El tiempo y la pérdida de peso puede variar en cada persona dependiendo de como siga indicaciónes, calidad de actividad física y situaciones hormonales preexistentes.')
    
    return (
        <div>          

            <CambridgeDesign 
                cambridge_frase_inicial = { intro_phrase }
                cambridge_parrafo_1 = { prfo_1 }
                cambridge_parrafo_2 = { prfo_2 }
                cambridge_parrafo_3 = { prfo_3 }
                cambridge_parrafo_4 = { prfo_4 } 
                cambridge_parrafo_5 = { prfo_5 }
                pie_cards = { pieCards }
            />
        </div>
    )
}

export default Cambridge
