import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SocialMediaEmbarazoArticulo from './SocialMediaEmbarazoArticulo';

function ObesidadEmbarazoDesign() {

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div className='container-articulo-resumen'>
            <div className='banner-articulo-resumen'>
                <h1>Embarazo y obesidad.</h1>
                <p>Dr. Díaz D., Universidad La Salle, Certificado por el Consejo Mexicano para la Evaluación del Estudio de la Obesidad. </p>
            </div>
            <SocialMediaEmbarazoArticulo />

            <div className='info-articulo-resumen'>
                <div className='articulo-resumen'>
                    <h3>Resumen</h3>
                    <p>
                        La reproducción exitosa requiere de la acumulación de reservas de energía. Sin embargo el aumento en estas reservas puede 
                        condicionar obesidad. La obesidad es uno de los factores de riesgo más importantes para el desarrollo de diversos padecimientos 
                        dentro de los que se encuentra la diabetes mellitus gestacional y la pre-eclampsia.
                    </p> 
                    <p>
                        Las complicaciones más frecuentes en la obesidad gestacional son: hipertensión, diabetes, varices, coledocolitiasis, embarazos 
                        prolongados, retardo en el crecimiento intrauterino, mayor porcentaje de complicaciones al nacimiento, infecciones antes y después 
                        del parto, complicaciones tromboticas, anemia, infecciones urinarias y desordenes en la lactancia.
                    </p> 
                    <p>
                        El riesgo de hipertensión (pre-eclampsia), cesárea y macrosomia, se relacionan directamente con el aumento del IMC en contraste con 
                        la distocia de hombro, y parto pretermino en los cuales no influye el IMC.
                    </p>
                    <p>
                        La diabetes gestacional está presente en pacientes con obesidad gestacional en un 5.2% comparado con las mujeres con peso normal.
                    </p>
                    <p>
                        La cesárea es más frecuente 9.2% en pacientes con obesidad (más de 12 kg) y 4.4% en pacientes con peso normal (menos de 12 kg). La muerte perinatal 
                        en obesidad 10 % y en peso normal 2 % y la gestosis (enfermedades derivadas del embarazo) en obesidad se da en el 4% de las pacientes 
                        y en pacientes con peso normal 1.8%.
                    </p>
                    <p>
                        El retardo en el crecimiento intrauterino (IUGR) se presenta ya sea por factores materno-fetales o por insuficiencia placentaria, 
                        en donde los factores endocrinos representan solo una minoría de su etiología. Dentro de las principales causas endocrinas se 
                        encuentran los desordenes en la insulina o de la secreción ó acción del Factor de crecimiento similar a la insulina-1 (IGF-1).
                    </p>      
                    <p>
                        Los recién nacidos con IUGR tienen riesgo elevado de presentar síndrome metabólico posteriormente en su vida, caracterizado por obesidad, 
                        hipertensión arterial, hipercolesterolemia, enfermedades cardiovasculares, intolerancia a la glucosa o DM tipo 2.  Además parece estar 
                        asociado en las niñas una adrenarquia prematura (adrenarquia = cambio fisiológico que ocurre a los 8 años aproximadamente caracterizado 
                        por un aumento de la función de la corteza suprarrenal) así como hiperandrogenismo ovárico.
                    </p>  
                    <p>
                        Los riesgos que corre una paciente y su bebé si esta se encuentra con sobrepeso en el momento de embarazarse son muy elevados por lo tanto 
                        debemos prevenir tratando el sobrepeso de la paciente antes de que esta se embarace para así aminorar riesgos y garantizar un embarazo con 
                        una evolución exitosa.
                    </p>                    
                    
                    <br/>

                    <h5>
                        Si desea ver el articulo completo ingrese por medio del siguiente botón.
                    </h5>
                    <div className='btn-contain-viewPDF'>
                        <button>
                            <Link   to='/embarazoyobesidadViewPDF' >
                                <li> 
                                    Ver artículo
                                </li>
                            </Link>
                        </button>
                    </div>
                    


                </div>
            </div>            
        </div>
    )
}

export default ObesidadEmbarazoDesign
