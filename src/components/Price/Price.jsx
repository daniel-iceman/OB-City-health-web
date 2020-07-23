import React, { useState, useEffect } from 'react'
import './Price.css'
import PriceDesign from './PriceDesign'

function Price() {

    const [parr1] = useState ('En esta época resulta vital cuidar la salud de los miembros de un equipo dentro de una empresa.   Existen riesgos de salud asociados al sobrepeso y la obesidad que se pueden evitar, desde mayor propensión a caídas hasta enfermedades ocasionadas por estos como la diabetes, hipertensión, problemas de colesterol etc.')
    const [parr2] = useState ('El que un miembro de su equipo de trabajo presente un evento relacionado con estos problemas podría ocasionar no solo mayores gastos para su empresa sino también ausentismo laboral que influirá negativamente en el desarrollo de sus proyectos.')
    const [parr3] = useState ('Así mismo y no menos importante, la imagen que los miembros de su equipo proyectan a sus clientes es de suma importancia para la adquisición o desarrollo de nuevos proyectos.')
    const [parr4] = useState ('Siendo conscientes de esto, en OB City health le ofrecemos un servicio mediante el cual nos encargaremos de restaurar y vigilar la salud de los miembros de su equipo, con un seguimiento continuo, ayudándolos a mantener un peso y una talla adecuada, tener un control adecuado de sus niveles de glucosa, colesterol, triglicéridos entre otros y que puedan ofrecer una imagen saludable y dinámica a sus clientes.')
    const [parr5] = useState ('Como líder de una empresa, si desea mantener un equipo sano, que desarrolle sus funciones al máximo contáctenos para que le podamos brindar más información sobre nuestros servicios.')
    
    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div>
            <PriceDesign 
            parrafo1 = { parr1 }
            parrafo2 = { parr2 }
            parrafo3 = { parr3 }
            parrafo4 = { parr4 }
            parrafo5 = { parr5 }
            />
        </div>
    )
}

export default Price
