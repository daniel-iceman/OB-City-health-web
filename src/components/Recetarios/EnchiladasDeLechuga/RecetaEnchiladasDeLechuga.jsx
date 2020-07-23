import React, { useState, useEffect } from 'react'
import '..//Recetas.css'
import EnchiladasDeLechuga from './EnchiladasDeLechuga'

function RecetaEnchiladasDeLechuga() {

    const [ tituloReceta ] = useState ('Enchiladas de lechuga')

    const [ ingred_1 ] = useState ('1 pieza de pechuga de pollo.')
    const [ ingred_2 ] = useState ('1 cucharada de sal (para el pollo).')
    const [ ingred_3 ] = useState ('4 piezas de jitomate bola (para la salsa).')
    const [ ingred_4 ] = useState ('1/4 de pieza de cebolla (para la salsa).')
    const [ ingred_5 ] = useState ('1 diente de ajo (para la salsa).')
    const [ ingred_6 ] = useState ('3 piezas de chile chipotle (para la salsa).')
    const [ ingred_7 ] = useState ('1 taza de caldo de pollo (para la salsa).')
    const [ ingred_8 ] = useState ('2 cucharadas de aceite.')
    const [ ingred_9 ] = useState ('2 pizcas de sal.')
    const [ ingred_10 ] = useState ('1 pizca de pimienta.')
    const [ ingred_11 ] = useState ('8 hojas de lechuga romana lavadas, desinfectadas y secas.')
    const [ ingred_12 ] = useState ('1/2 pieza de aguacate en cubos.')
    const [ ingred_13 ] = useState ('1 taza de queso panela rallado (para decorar).')

    const [ paso_1 ] = useState ('En una olla, pon a cocer el pollo con la sal. Enfría y desmenuza. Para la salsa, licúa todos los ingredientes con el caldo de pollo por 3 minutos.')
    const [ paso_2 ] = useState ('En una olla, calienta el aceite a fuego medio y agrega la salsa y el resto del caldo. Deja que suelte el hervor y cocina a fuego bajo por 10 minutos o hasta que espese.')
    const [ paso_3 ] = useState ('Sazona, condimenta con la sal y pimienta e incorpora el pollo y cocina dos minutos más.')
    const [ paso_4 ] = useState ('Coloca hojas de lechuga en un plato y sirve el pollo en medio, envuélvelo y báñalo con la salsa que ha quedado en el sartén, coloca encima los cubitos de aguacate y el queso rallado.')
    const [ paso_5 ] = useState ('Y listo, a disfrutar!')

    const [ caract_1 ] = useState ('Más de 45 minutos.')
    const [ caract_2 ] = useState ('Se puede preparar en los 3 alimentos.')
    const [ caract_3 ] = useState ('Tiene un balance nutricional excelente.')
    const [ caract_4 ] = useState ('Tiene un contenido bajo de carbohidratos.')

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div>
            <EnchiladasDeLechuga 
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
                ingrediente_12= { ingred_12 }
                ingrediente_13= { ingred_13 }
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

export default RecetaEnchiladasDeLechuga
