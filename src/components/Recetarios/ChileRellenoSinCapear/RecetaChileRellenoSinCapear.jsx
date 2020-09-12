import React, { useState, useEffect } from 'react'
import '..//Recetas.css'
import ChileRellenoSinCapear from './ChileRellenoSinCapear'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const RecetaChileRellenoSinCapear = ({ uid }) => {

    const [ tituloReceta ] = useState ('Chiles rellenos de queso')

    const [ ingred_1 ] = useState ('5 chiles poblanos.')    
    const [ ingred_2 ] = useState ('250 grs. de queso panela.')
    const [ ingred_3 ] = useState ('3 tomates rojos o jitomates.')
    const [ ingred_4 ] = useState ('2 tazas de caldo de pollo.')
    const [ ingred_5 ] = useState ('2 dientes de ajo')
    const [ ingred_6 ] = useState ('1/2 cebolla blanca pequeña o 1/3 de cebolla grande')
    const [ ingred_7 ] = useState ('2 ramas de perejil fresco.')
    const [ ingred_8 ] = useState ('1 toque de orégano (opcional).')
    const [ ingred_9 ] = useState ('Sal al gusto.')
    const [ ingred_10 ] = useState ('Pimienta negra molida al gusto.')
    const [ ingred_11 ] = useState ('Aceite para freír.')
    const [ ingred_12 ] = useState ('Palillos de madera.')

    const [ paso_1 ] = useState ('Comenzaremos por precalentar el horno a 180 grados.')
    const [ paso_2 ] = useState ('Luego, vamos a asar los tomates rojos sobre un comal o plancha.   En su defecto podemos usar una sartén.   La idea es irlos volteando para asarlos por todas sus caras.')
    const [ paso_3 ] = useState ('También pelaremos los dientes de ajo y los asaremos, igual que el trozo de cebolla.')
    const [ paso_4 ] = useState ('Luego, asaremos los chiles poblanos.  Iremos rotándolos sobre el comal o plancha, o incluso directamente sobre el fuego.  Posiblemente, la piel del chile se ampollará o se ennegrecerá en algunas partes.  Esto es normal.')
    const [ paso_5 ] = useState ('Dejaremos que los chiles se reposen unos cinco minutos, encerrados en una bolsa de plástico, para que suden.  Luego retiraremos cuidadosamente la piel.   El proceso que hemos realizado previamente hará que este paso sea más fácil.   Si hace falta, puedes ayudarte pasándolos bajo un chorro de agua para retirar los últimos trocitos de piel que queden.')
    const [ paso_6 ] = useState ('Para continuar, con un cuchillo bien afilado, haremos un corte lateral de la cabeza al extremo inferior de cada chile.')
    const [ paso_7 ] = useState ('Muy cuidadosamente, nos ayudaremos con el cuchillo para retirar las semillas del interior de cada chile, y la vena o parte blanca.  Haremos esto a través del corte vertical que hemos realizado en el paso anterior.')
    const [ paso_8 ] = useState ('Corta el queso panela en barras y distribúyelo en partes iguales para rellenar todos los chiles.  Introduce las barras de queso en cada chile, a través del corte vertical.')
    const [ paso_9 ] = useState ('Meteremos los chiles al horno en un refractario o recipiente similar, durante 20 minutos.')
    const [ paso_10 ] = useState ('Mientras tanto, aprovecharemos para preparar el caldillo o salsa.  En una licuadora, procesaremos los jitomates asados con o sin piel (yo prefiero dejarles la piel), el ajo, la cebolla, las hojas de perejil (bien lavadas), el caldo de pollo y un toque de sal, pimienta y orégano.')
    const [ paso_11 ] = useState ('Una vez bien líquido el caldillo, lo pasaremos a una olla y lo mantendremos a fuego bajo.   Es recomendable probarlo para verificar y corregir la sazón, si es necesario.')
    const [ paso_12 ] = useState ('Cuando saquemos los chiles del horno, los serviremos en un plato, bañados con un poco de caldillo.   Si hemos utilizado palillos de madera para cerrarlos, hay que retirarlos antes de servir.')
    const [ paso_13 ] = useState ('Podemos decorar los chiles con trocitos de carne, como chorizo, carne de res o con hierbas picadas finamente como cilantro y perejil.')

    const [ caract_1 ] = useState ('Más de 45 minutos.')
    const [ caract_2 ] = useState ('Se puede preparar en los 3 alimentos.')
    const [ caract_3 ] = useState ('Tiene un balance nutricional excelente.')
    const [ caract_4 ] = useState ('Tiene un contenido bajo de carbohidratos.')

    useEffect(() => {
        window.scroll(0,0)
      });

    
    if(!uid) return <Redirect to='/login' />

    return (
        <div>
            <ChileRellenoSinCapear 
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
                procedimiento_1= { paso_1 }
                procedimiento_2= { paso_2 }
                procedimiento_3= { paso_3 }
                procedimiento_4= { paso_4 }
                procedimiento_5= { paso_5 }
                procedimiento_6= { paso_6 }
                procedimiento_7= { paso_7 }
                procedimiento_8= { paso_8 }
                procedimiento_9= { paso_9 }
                procedimiento_10= { paso_10 }
                procedimiento_11= { paso_11 }
                procedimiento_12= { paso_12 }
                procedimiento_13= { paso_13 }
                caracteristica_1= { caract_1 }
                caracteristica_2= { caract_2 }
                caracteristica_3= { caract_3 }
                caracteristica_4= { caract_4 }
            />
        </div>
    )
}

const mapStateToProps = state => {
    const uid = state.firebase.auth.uid;
    return {
        uid: uid,
    };
};


export default connect(mapStateToProps)(RecetaChileRellenoSinCapear)

