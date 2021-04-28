import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faVirus } from "@fortawesome/free-solid-svg-icons";
import { faHeadSideCough } from "@fortawesome/free-solid-svg-icons";
import { faLungsVirus } from "@fortawesome/free-solid-svg-icons";
import { faPeopleArrows } from "@fortawesome/free-solid-svg-icons";
import { faHandsWash } from "@fortawesome/free-solid-svg-icons";
import { faHeadSideMask } from "@fortawesome/free-solid-svg-icons";
import { faShieldVirus } from "@fortawesome/free-solid-svg-icons";
import CovidSocialMedia from './CovidSocialMedia';

function CovidDesign() {
    return (
        <div className='container-covid19'>
            <div className='header-covid19'>
                <h1>COVID-19</h1>            
            </div>
            <div className='alertBanner-container'>
                <div className='alertBanner'>
                    <h5><FontAwesomeIcon 
                            icon={faExclamationTriangle} 
                            fixedWidth
                            className='FontAwseomeCovidAlert'/>
                            Alerta: Si tiene sobrepeso u obesidad el riesgo de complicaciones por SARS-COV2 es mayor.
                    </h5>
                </div>
            </div>

            <CovidSocialMedia />

            <div className='cuadroCovid-contenedor'>
                <div className='cuadroCovid'>
                    <h4><FontAwesomeIcon 
                            icon={faVirus} 
                            fixedWidth 
                            className='FontAwseomeCovid'/> 
                            Nombre: COVID-19 / SARS-COV2
                    </h4>

                    <h4><FontAwesomeIcon 
                            icon={faHeadSideCough}
                            fixedWidth
                            className='FontAwseomeCovid'/>
                            Transmisión: Ojos, nariz y boca
                    </h4>

                    <h4><FontAwesomeIcon 
                            icon={faLungsVirus} 
                            fixedWidth
                            className='FontAwseomeCovid'/>
                            Afección: Multiorgánica
                    </h4>         

                    <h3>Prevención de contagio:</h3>

                    <h4><FontAwesomeIcon 
                            icon={faPeopleArrows} 
                            fixedWidth
                            className='FontAwseomeCovid'/>
                            Distanciamiento social
                    </h4>

                    <h4><FontAwesomeIcon 
                            icon={faHandsWash} 
                            fixedWidth
                            className='FontAwseomeCovid'/>
                            Lavado de manos
                    </h4>

                    <h4><FontAwesomeIcon
                            icon={faHeadSideMask} 
                            fixedWidth
                            className='FontAwseomeCovid'/>
                            Uso de cubrebocas y protección ocular
                    </h4>               

                    <h3>Prevención de complicaciones:</h3>

                    <h4><FontAwesomeIcon 
                            icon={faShieldVirus}
                            fixedWidth
                            className='FontAwseomeCovid'/>
                            Adecuado estado metabólico e inmunológico
                    </h4>
                </div>
            </div>

            <div className='blogCovid'>
                <div className='parrafo-1-covid'>
                    <div className='imagen-covid-container'>
                        <div className='imagen-covid' />
                    </div>
                    <div className='frase-covid'>
                        <h1>
                            COVID-19: Su capacidad de contagio y la probabilidad de complicaciones lo ha convertido en un tema de interés a nivel internacional, marcando un espacio en la historia de la humanidad.
                        </h1>
                    </div>
                </div>

                <div className='parrafo-2-covid'>
                    <div className='texto-covid'>
                        <p>
                            COVID-19 es una enfermedad provocada por un coronavirus.  Se transmite principalemente cuando la saliva y/o fluido nasal de una persona infectada entran en contacto con ojos, nariz y boca de una persona sana, esto puede ser ya sea por el contacto con gotas de gran o mediano tamaño o bien por gotas de pequeño tamaño (aerosoles).  Estas últimas pueden permanecer suspendidas en el ambiente por periodos que van de los 30 minutos a las 3 horas.  Así mismo, también se puede contraer cuando existe contacto de la manos con superficies contaminadas y su posterior inoculación a ojos, nariz y boca. <br/> 
                        </p>                            
                        <p>
                            Una vez contraída la enfermedad pueden pasar de 3 días como mínimo hasta 15 días como máximo para que inicien los síntomas.   <br/>
                            Los síntomas pueden variar en su intensidad pudiendo ser de baja intensidad, cuando los pacientes son considerados como asintomáticos o bien, presentan síntomas menores; de moderada intensidad cuando los síntomas requieren uso de medicamentos, pero el paciente puede permanecer en casa; y de intensidad alta o severa en la cual los pacientes requieren hospitalización, uso de oxígeno y frecuentemente ingresar a unidad de cuidados intensivos. <br/>
                            Los síntomas son diversos desde sólo pérdida de olfato, pérdida del gusto y dolor de cabeza en casos leves.   Cuando la intensidad es moderada puede agregarse fiebre, tos, cansancio, dolor de garganta, diarrea y conjuntivitis.    En los casos mas graves, y que implican una emergencia, el paciente inicia con dificultad respiratoria o sensación de falta de aire, dolor o presión en el pecho e incapacidad para hablar o moverse.   Así mismo pueden presentar estudios de laboratorio con alteraciones de coagulación que serán motivo de anticoagulación y vigilancia cercana. <br/>
                        </p>
                        <p>
                            Las personas que padecen hipertensión, diabetes, sobrepeso y obesidad pertenecen a los grupos en los cuales se han observado mayor numero de complicaciones debido a su estado metabólico y como éste afecta su estado inmunológico.  Por lo tanto, es de suma importancia que si usted padece alguno de estos antecedentes cuide que su presión y su azúcar se encuentren bajo control y si padece algún grado de sobrepeso acuda con un especialista para que lo apoyen en la perdida de grasa corporal y con esto reduzca los riesgos en caso de contraer la enfermedad. <br/>
                        </p> 
                        <p>
                            <span className='span-txt'>La obesidad puede ser un factor de riesgo que implique intubación, uso de ventilación mecánica y mayores complicaciones vasculares como infartos.</span>
                        </p>
                        <p>
                            La inmunidad que conlleva haber padecido COVID-19 es relativa, se ha observado que en personas que fueron asintomáticos o bien presentaron síntomas leves dura unos cuantos meses en comparación de aquellos que presentaron síntomas mas agresivos durante la enfermedad. 
                        </p>
                        <p>
                            <span className='span-txt'>La obesidad puede provocar que la inmunidad adquirida ya sea por haber cursado con COVID-19 o bien por la vacunación, sea de menor duración.</span>
                        </p>                       
                    </div>   

                    <div className='factor-risk-button'>
                        <h3> Si padece sobrepeso u obesidad contactenos, nosotros podemos ayudarlo</h3>
                        <button>                           
                            <li> 
                                <a  
                                    href="https://www.obcity.store/contacto-ob-city-web">
                                        Contáctanos
                                </a>
                                
                            </li>                            
                        </button>
                    </div>
                    <div className='article-covid19-button'>
                        <h3> Si desea leer el artículo escrito por el Dr. Daniel Díaz</h3>
                        <button>
                            <Link   to='/articulo_covid19' >
                                <li> 
                                    Ingrese aquí
                                </li>
                            </Link>
                        </button>
                    </div>

                </div>


            </div>
            
        </div>
    )
}

export default CovidDesign
