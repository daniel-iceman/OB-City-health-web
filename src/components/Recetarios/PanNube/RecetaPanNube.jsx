import React, { useState, useEffect } from 'react'
import '..//Recetas.css'
import PanNube from './PanNube'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


const RecetaPanNube = ({ uid }) => {

    const [ tituloReceta ] = useState ('Pan Nube')

    const [ ingred_1 ] = useState ('3 huevos')
    const [ ingred_2 ] = useState ('3 cucharadas de queso blanco')
    const [ ingred_3 ] = useState ('¼ cda de polvo de hornear')
    const [ ingred_4 ] = useState ('Condimentos opcionales: edulcorante, sal, ajo en polvo, orégano, romero, etc.')
        
    const [ paso_1 ] = useState ('Para empezar, precalienta el horno a 150 ºC (300 ºF), cubre una charola con papel para hornear y engrasa con aceite en aerosol.')
    const [ paso_2 ] = useState ('Coloca el queso crema en un recipiente y calienta en el microondas en intervalos de 10 segundos hasta que se haga líquido. Deja enfriar a temperatura ambiente y mezcla con las yemas de los huevos hasta obtener una consistencia uniforme.')
    const [ paso_3 ] = useState ('Coloca las claras de los huevos y el polvo para hornear en un recipiente y bate con la ayuda de la batidora eléctrica.')
    const [ paso_4 ] = useState ('Añada la mezcla anterior a las claras de los huevos cuidando que no se desinflen las claras.')
    const [ paso_5 ] = useState ('Pon cucharas de la mezcla sobre la charola formando círculos de 10 centímetros de diámetro y aplana con la parte trasera de la cuchara.')
    const [ paso_6 ] = useState ('Pon en el horno precalentado durante 15 o 20 minutos hasta que tengan un color dorado.')

    const [ caract_1 ] = useState ('Mas de 30 minutos.')
    const [ caract_2 ] = useState ('Se puede preparar en los 3 alimentos.')
    const [ caract_3 ] = useState ('Tiene un balance nutricional adecuado.')
    const [ caract_4 ] = useState ('Tiene un contenido bajo de carbohidratos.')

    useEffect(() => {
        window.scroll(0,0)
      });


    if(!uid) return <Redirect to='/login' />
    return (
        <div>
            <PanNube 
            titulo= { tituloReceta }
            ingrediente_1= { ingred_1 }
            ingrediente_2= { ingred_2 }
            ingrediente_3= { ingred_3 }
            ingrediente_4= { ingred_4 }
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

const mapStateToProps = state => {
    const uid = state.firebase.auth.uid;
    return {
        uid: uid,
    };
};


export default connect(mapStateToProps)(RecetaPanNube)

