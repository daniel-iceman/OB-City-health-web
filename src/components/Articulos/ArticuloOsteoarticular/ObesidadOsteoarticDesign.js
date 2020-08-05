import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SocialMediaOsteoarticularArticulo from './SocialMediaOsteoarticularArticulo';

function ObesidadOsteoarticDesign() {

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div className='container-articulo-resumen'>
            <div className='banner-articulo-resumen'>
                <h1>Obesidad y su relación con las Alteraciones Osteoarticulares en el ser humano.</h1>
                <p>Dr. Díaz D., Universidad La Salle, Certificado por el Consejo Mexicano para la Evaluación del Estudio de la Obesidad. </p>
            </div>

            <SocialMediaOsteoarticularArticulo />

            <div className='info-articulo-resumen'>
                <div className='articulo-resumen'>
                    <h3>Resumen</h3>
                    <p>
                        Hablando de obesidad y problemas musculo-esqueléticos nos encontramos en una “Y” con 2 vertientes, por un lado el sobrepeso que cargan 
                        nuestros huesos y articulaciones y por otro lado los efectos bioquímicos y biomoleculares que se presentan con el aumento en la celularidad 
                        adiposa con el respectivo incremento en la síntesis y producción de citoquinas y hormonas propias del tejido adiposo.
                    </p> 
                    <p>
                        En diversos estudios sobre padecimientos músculo-esqueléticos se ha encontrado que existe una relación directa entre el dolor y la obesidad 
                        y que al reducir de peso los pacientes el dolor disminuye, siendo más notorio en los casos de dolor lumbar y de rodillas, así mismo 
                        anteriormente se observó que las causas más frecuentes para la presentación del dolor lumbar radicular eran el tabaquismo y la actividad 
                        física intensa pero en 19 estudios publicados desde agosto del 2006 se encontró que el sobrepeso y la obesidad se relacionaban directamente 
                        con este padecimiento.
                    </p> 
                    <p>
                        En niños y adolescentes con sobrepeso y obesidad se encontró una asociación estadística entre obesidad y dolor lumbar, genu valgum, genu 
                        recurvatum y rigidez de cuadriceps.
                    </p>
                    <p>
                        En cuanto a la condición músculo-esquelética antes y después de la pérdida de peso se observó que existe una disminución de complicaciónes 
                        de la siguiente forma: 90% dolor cervical, 83% dolor lumbar, 83% dolor en miembros inferiores y 92% las fibromialgias.
                    </p>
                    <p>
                        Existe una relación entre obesidad, artritis reumatoide y osteoartritis que puede prevenirse si el paciente mantiene un peso
                        y niveles de grasa adecuados. 
                    </p>
                                        
                    <br/>

                    <h5>
                        Si desea ver el articulo completo ingrese por medio del siguiente botón.
                    </h5>
                    <div className='btn-contain-viewPDF'>
                        <button>
                            <Link   to='/osteoarticularViewPDF' >
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

export default ObesidadOsteoarticDesign
