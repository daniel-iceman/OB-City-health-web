import React, { useState, useEffect } from 'react'
import '..//Recetas.css'
import PizzaColiflor from './PizzaColiflor'


function RecetaPizzaColiflor() {

    const [ tituloReceta ] = useState ('Pizza con base de coliflor')

    const [ ingred_1 ] = useState ('1 coliflor, limpia y en trozos pequeños, masa ')
    const [ ingred_2 ] = useState ('1 huevo')
    const [ ingred_3 ] = useState ('1 cucharadita de sal')
    const [ ingred_4 ] = useState ('1/2 cucharaditas de pimienta ')
    const [ ingred_5 ] = useState ('1 taza de harina de trigo')
    const [ ingred_6 ] = useState ('1/2 tazas de puré de tomate ')
    const [ ingred_7 ] = useState ('1 taza de jitomate cherry, cortados por la mitad')
    const [ ingred_8 ] = useState ('1 pimiento amarillo, cortado en tiras')
    const [ ingred_9 ] = useState ('1/2 tazas de tofu, para espolvorear (opcional)')
    const [ ingred_10 ] = useState ('1 cucharada de aceite de oliva ')
    const [ ingred_11 ] = useState ('1 pizca de orégano')
    const [ ingred_12 ] = useState ('1 pizca de sal')
    const [ ingred_13 ] = useState ('1 pizca de pimienta')
    const [ ingred_14 ] = useState ('10 hojas de albahaca, para decorar')
    
    const [ paso_1 ] = useState ('Precalienta el horno a 180°C.')
    const [ paso_2 ] = useState ('Procesa la coliflor en un procesador para alimentos hasta obtener un polvo medianamente fino.')
    const [ paso_3 ] = useState ('Coloca la coliflor en un bowl y deshidrata en el microondas por 4 a 6 minutos a máxima potencia.')
    const [ paso_4 ] = useState ('Mezcla la coliflor con el huevo, la sal, la pimienta y la harina.')
    const [ paso_5 ] = useState ('Sobre una charola con papel encerado, extiende la masa de coliflor con un rodillo hasta formar un círculo. Hornea por 20 minutos hasta que esté doradita.')
    const [ paso_6 ] = useState ('Saca la base de coliflor y agrega puré de tomate, los jitomates cherry, el pimiento amarillo, el tofu, el aceite de oliva, el orégano, la sal y la pimienta. Decora con albahaca.')
    

    const [ caract_1 ] = useState ('Más de 45 minutos.')
    const [ caract_2 ] = useState ('Se puede preparar solo en desayuno y comida.')
    const [ caract_3 ] = useState ('Tiene un balance nutricional excelente.')
    const [ caract_4 ] = useState ('Tiene un contenido medio de carbohidratos.')

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div>
            <PizzaColiflor 
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
                ingrediente_14= { ingred_14 }               
                procedimiento_1= { paso_1 }
                procedimiento_2= { paso_2 }
                procedimiento_3= { paso_3 }    
                procedimiento_4= { paso_4 }  
                procedimiento_5= { paso_5 }  
                procedimiento_6= { paso_6 }              
                caracteristica_1= { caract_1 }
                caracteristica_2= { caract_2 }
                caracteristica_3= { caract_3 }
                caracteristica_4= { caract_4 } 
            />
        </div>
    )
}

export default RecetaPizzaColiflor
