import React, { useEffect, useState } from 'react'
import ConsejosDesign from './ConsejosDesign'
import './Consejos.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Consejos = ({ uid }) => {

    const [ tituloSecc ] = useState ('Consejos')
    
    const [ cons1 ] = useState ('"Llevar a cabo una dieta o tomar suplementos o medicamentos sin supervisión de un médico especialista puede tener consecuencias negativas en tu salud."')
    const [ cons2 ] = useState ('"No es indispensable, aunque si recomendable realizar actividad física para perder grasa corporal."')
    const [ cons3 ] = useState ('"Tener muchas metas a corto plazo es fundamental para fomentar la motivación.  Tener solo una meta final, en un camino largo, frecuentemente provoca deserción."')
    const [ cons4 ] = useState ('"No todo lo natural, necesariamente ayudará a que pierdas grasa, existen cosas que, aunque parezcan saludables contienen carbohidratos en exceso."')
    const [ cons5 ] = useState ('"Es el exceso de carbohidratos, no de las grasas, las que hacer que aumentemos la grasa corporal y nuestras medidas."')
    const [ cons6 ] = useState ('"Mantener una actitud positiva durante el tratamiento y ver cada avance como un logro, es esencial para alcanzar tu meta."')
    const [ cons7 ] = useState ('"Tener metas alcanzables y realistas es la esencia de un éxito seguro."')
    const [ cons8 ] = useState ('"Comer poca cantidad no es sinónimo de comer sano.   Recuerda que a veces la calidad supera a la cantidad."')
    const [ cons9 ] = useState ('"Hacer ejercicio (pesas) no endurece la grasa, pero el aumento de la masa muscular, si puede frenar la pérdida de peso corporal."')
    const [ cons10 ] = useState ('"Recuerda que no es el peso lo importante, aunque lo escuches por todos lados, es la grasa corporal la que debemos perder."')

    useEffect(() => {
        window.scroll(0,0)
      });

    if(!uid) return <Redirect to='/login' />
    return (
        <div>
            <ConsejosDesign
                tituloPag = { tituloSecc }
                consejo_1 = { cons1 }
                consejo_2 = { cons2 }
                consejo_3 = { cons3 }
                consejo_4 = { cons4 }
                consejo_5 = { cons5 }
                consejo_6 = { cons6 }
                consejo_7 = { cons7 }
                consejo_8 = { cons8 }
                consejo_9 = { cons9 }
                consejo_10 = { cons10 }
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

export default connect(mapStateToProps)(Consejos)
