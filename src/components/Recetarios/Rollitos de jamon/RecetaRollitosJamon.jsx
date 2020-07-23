import React, { useState, useEffect } from 'react'
import '..//Recetas.css'
import RollitosJamon from './RollitosJamon'

function RecetaRollitosJamon() {

    const [ tituloReceta ] = useState ('Rollitos de lechuga con jamón')

    const [ ingred_1 ] = useState ('1 hoja de lechuga ')
    const [ ingred_2 ] = useState ('1 rebanada de jamón de pavo bajo en grasas')
    const [ ingred_3 ] = useState ('1 rebanada de jamón ')
    const [ ingred_4 ] = useState ('1 rebanada de jitomate ')
    const [ ingred_5 ] = useState ('1 rebanada de aguacate ')
    const [ ingred_6 ] = useState ('1/2 cucharada de mayonesa light ')
    const [ ingred_7 ] = useState ('1/2 cucharada de chile chipotle ')
    const [ ingred_8 ] = useState ('1 cucharadita de jugo de limón')
    
    const [ paso_1 ] = useState ('Coloca la lechuga en un plato, encima el jamón de pavo, el jamón, y el jitomate.')
    const [ paso_2 ] = useState ('En un recipiente mezcla la mayonesa light con los chipotles y el jugo de limón.')
    const [ paso_3 ] = useState ('Agrega el aguacate y coloca encima del jitomate en el sandwich. Enrolla la lechuga y sujeta con un palillo. Sírvelo inmediatamente.')
    

    const [ caract_1 ] = useState ('No mas de 15 minutos.')
    const [ caract_2 ] = useState ('Se puede preparar en los 3 alimentos.')
    const [ caract_3 ] = useState ('Tiene un balance nutricional excelente.')
    const [ caract_4 ] = useState ('Tiene un contenido bajo de carbohidratos.')

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div>
            <RollitosJamon 
            titulo= { tituloReceta }
            ingrediente_1= { ingred_1 }
            ingrediente_2= { ingred_2 }
            ingrediente_3= { ingred_3 }
            ingrediente_4= { ingred_4 }
            ingrediente_5= { ingred_5 }
            ingrediente_6= { ingred_6 }
            ingrediente_7= { ingred_7 }
            ingrediente_8= { ingred_8 }
            procedimiento_1= { paso_1 }
            procedimiento_2= { paso_2 }
            procedimiento_3= { paso_3 }            
            caracteristica_1= { caract_1 }
            caracteristica_2= { caract_2 }
            caracteristica_3= { caract_3 }
            caracteristica_4= { caract_4 }
            />            
        </div>
    )
}

export default RecetaRollitosJamon
