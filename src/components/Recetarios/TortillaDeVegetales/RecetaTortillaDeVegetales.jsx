import React, { useState, useEffect } from 'react'
import '..//Recetas.css'
import TortillaDeVegetales from './TortillaDeVegetales'

function RecetaTortillaDeVegetales() {

    const [ tituloReceta ] = useState ('Tortilla de vegetales')

    const [ ingred_1 ] = useState ('Spray anti-adherente PAM® Original')
    const [ ingred_2 ] = useState ('3/4 de taza de cebolla amarilla en rebanadas finas')
    const [ ingred_3 ] = useState ('3 tazas de espinaca fresca cortada')
    const [ ingred_4 ] = useState ('2 dientes de ajo medianos, finamente picados')
    const [ ingred_5 ] = useState ('1/4 de cucharadita de pimienta negra molida')
    const [ ingred_6 ] = useState ('1 taza de tomates en cubos pequeños y escurridos')
    const [ ingred_7 ] = useState ('1 cucharada de vinagre balsámico')
    const [ ingred_8 ] = useState ('1 envase de carton (500 ml) de claras de huevo o si lo desea puede utilizar 6 huevos completos')
    
    const [ paso_1 ] = useState ('Rocíe spray antiadherente en una sartén mediana con asa apta para horno. Caliente a fuego medio. Añada la cebolla y cocine durante 3 minutos o hasta que esté tierna.')
    const [ paso_2 ] = useState ('Revuelva frecuentemente. Agregue la espinaca, el ajo y la pimienta. Revuelva y cocine durante 2 a 3 minutos o hasta que la espinaca se ablande ligeramente. Añada los tomates escurridos y el vinagre. Revuelva.')
    const [ paso_3 ] = useState ('Vierta los huevos de manera uniforme sobre la mezcla de espinaca. Reduzca el fuego a medio-bajo. Tape la sartén. Cocine durante 10 minutos o hasta que la parte superior de la tortilla esté casi cuajada. Mientras tanto, precaliente la parrilla.')
    const [ paso_4 ] = useState ('Destape la sartén y colóquela debajo de la parrilla. Cocine durante 2 minutos o sólo hasta que la parte superior cuaje. Corte en 4 triángulos.')
    const [ paso_5 ] = useState ('Para cocinar la tortilla sólo sobre la cocina, coloque los huevos sobre la mezcla de espinaca y reduzca el fuego a medio-bajo. Tape la sartén. Luego de 6 minutos, levante el borde de la tortilla con una espátula e incline la sartén para que los huevos fluyan hacia abajo. Repítalo en diferentes partes del borde. Tape y continúe cocinando durante 4 minutos o hasta que cuaje.')

    const [ caract_1 ] = useState ('No mas de 30 minutos.')
    const [ caract_2 ] = useState ('Se puede preparar en los 3 alimentos.')
    const [ caract_3 ] = useState ('Tiene un balance nutricional excelente.')
    const [ caract_4 ] = useState ('Tiene un contenido bajo de carbohidratos.')

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div>
            <TortillaDeVegetales 
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
               procedimiento_4= { paso_4 }
               procedimiento_5= { paso_5 }
               caracteristica_1= { caract_1 }
               caracteristica_2= { caract_2 }
               caracteristica_3= { caract_3 }
               caracteristica_4= { caract_4 }             
            />
        </div>
    )
}

export default RecetaTortillaDeVegetales
