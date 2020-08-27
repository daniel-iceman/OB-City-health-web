import React, { useState, useEffect } from 'react'
import '../PacienteIndividual.css'
import MariaLuisaDesign from './MariaLuisaDesign'

function MariaLuisa() {

    const [namePac] = useState('María Luisa')
    const [skillPac] = useState('41 años - Bajó: 16 kg')
    const [phrasePac] = useState('"Tengo las ganas, la energía y el tiempo para hacer ejercicio todos los días"')
    const [speach_1_Pac] = useState('Primero que nada, tienen que saber que durante toda mi vida he luchado con el sobrepeso; había probado diferentes dietas, métodos, tipos de doctores, incluso algunos medicamentos con los que sólo logré subir más de peso una vez que los dejaba.')
    const [speach_2_Pac] = useState('Sentía mi ropa, ya de por si talla muy grande, más apretada de lo normal, iniciaba con ciertos dolores en las rodillas, y cualquier esfuerzo me cansaba, pero a la vez tampoco tenía las ganas de iniciar una dieta pues mi pretexto de los últimos años no me dejaba; "Tengo muchas cosas que hacer, no tengo tiempo de preparar comida especial, ni de comer en horarios específicos y mucho menos tengo tiempo de hacer ejercicio"')
    const [speach_3_Pac] = useState('El proceso físico y mental por el que he pasado estos meses me llena en todos los sentidos, logré lo que creía imposible y además me siento mejor que nunca. Cambridge Weight Plan no sólo es un método seguro y rápido para bajar de peso, también es un método fácil de llevar cuando trabajas pues no hay pretextos iniciales de tener que “preparar” una gran comida cuando no tienes tiempo de hacerlo.')
    
    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div>
            <MariaLuisaDesign 
            nombre = { namePac }
            resultados = { skillPac }
            frase = { phrasePac }
            testimonio1 = { speach_1_Pac }
            testimonio2 = { speach_2_Pac }
            testimonio3 = { speach_3_Pac }
            />
        </div>
    )
}

export default MariaLuisa
