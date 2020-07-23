import React, { useState, useEffect } from 'react'
import '..//Recetas.css'
import QuicheEspinacas from './QuicheEspinacas'

function RecetaQuicheEspinacas() {

    const [ tituloReceta ] = useState ('Quiché de espinacas light')

    const [ ingred_1 ] = useState ('aceites de oliva ')
    const [ ingred_2 ] = useState ('4 onzas de queso gouda cortado en cuatro')
    const [ ingred_3 ] = useState ('2 huevos grandes')
    const [ ingred_4 ] = useState ('2 claras de huevo ')
    const [ ingred_5 ] = useState ('1 paquete de queso ricotta (de 15 onzas)')
    const [ ingred_6 ] = useState ('2 cucharadas de harina ')
    const [ ingred_7 ] = useState ('1/2 cucharadita de nuez moscada ')
    const [ ingred_8 ] = useState ('6 ramas de cebollín picado')
    const [ ingred_9 ] = useState ('1 cucharada de queso parmesano rallado')
    const [ ingred_10 ] = useState ('1 cucharadita de paprika ')
    const [ ingred_11 ] = useState ('1 paquete de espinaca congelada descongeladas y secas ')
    
    const [ paso_1 ] = useState ('Precalentar el horno a 320 F y meter una charola para hornear en la zona alta del horno. Engrasar un molde de 30 centímetros de diámetro con aceite de oliva.')
    const [ paso_2 ] = useState ('Poner el queso gouda en el procesador de alimentos y picarlo finamente. Añadir la espinaca, los huevos enteros, las claras de huevo, el queso ricota, harina y nuez moscada y procesar hasta que este bien mezclado (unos 30 segundos). Añadir el cebollín y revolver.')
    const [ paso_3 ] = useState ('Poner la mezcla en el molde engrasado y espolvorear con queso parmesano y con páprika. Poner el quiche sobre la charola precalentada y cocinar hasta que el centro este cocido, unos 25-30 minutos.')
    

    const [ caract_1 ] = useState ('Más de 45 minutos.')
    const [ caract_2 ] = useState ('Se puede preparar solo en desayuno y comida.')
    const [ caract_3 ] = useState ('Tiene un balance nutricional excelente.')
    const [ caract_4 ] = useState ('Tiene un contenido medio de carbohidratos.')

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div>
            <QuicheEspinacas 
                titulo= { tituloReceta }
                ingrediente_1= { ingred_1 }
                ingrediente_2= { ingred_2 }
                ingrediente_3= { ingred_3 }
                ingrediente_4= { ingred_4 }
                ingrediente_5= { ingred_5 }
                ingrediente_6= { ingred_6 }
                ingrediente_7= { ingred_7 }
                ingrediente_8= { ingred_8 }
                ingrediente_9= { ingred_9 }
                ingrediente_10= { ingred_10 } 
                ingrediente_11= { ingred_11 }               
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

export default RecetaQuicheEspinacas
