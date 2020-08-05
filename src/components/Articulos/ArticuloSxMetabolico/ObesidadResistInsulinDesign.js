import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SocialMediaResistInsulinArticulo from './SocialMediaResistInsulinArticulo';

function ObesidadResistInsulinDesign() {

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div className='container-articulo-resumen'>
            <div className='banner-articulo-resumen'>
                <h1>Resistencia a la Insulina y la intervención de la Nutriterapia.</h1>
                <p>Dr. Díaz D., Universidad La Salle, Certificado por el Consejo Mexicano para la Evaluación del Estudio de la Obesidad. </p>
            </div>
            <SocialMediaResistInsulinArticulo />

            <div className='info-articulo-resumen'>
                <div className='articulo-resumen'>
                    <h3>Resumen</h3>
                    <p>
                        Se estima que en los países occidentales 23 a 25% de la población tiene un grado de resistencia a la insulina y las consecuencias 
                        asociadas con esta alteración metabólica. La resistencia a la insulina se presenta en esencia, cuando la habilidad de la insulina de 
                        metabolizar la glucosa en hígado, músculo esquelético, tejido adiposo y otros tejidos periféricos esta alterada. Cuantitativamente el 
                        músculo esquelético tiene el impacto mas grande de todo el cuerpo en esta alteración metabólica. La resistencia a la insulina se 
                        caracteriza usualmente por niveles elevados de insulina en ayuno y posterior a ingesta de alimentos así como por una disminución en 
                        la respuesta tisular a la insulina.
                    </p> 
                    <p>
                        La resistencia a la insulina es un factor de riesgo para diversas enfermedades como diabetes tipo 2, síndrome de ovario poliquistico, 
                        dislipidemias, hipertensión, apnea del sueño enfermedad cardiovascular, algunos tipos de cáncer hormono-dependientes y obesidad.
                        La obesidad, en la mayoría de los casos, va acompañada de resistencia a la insulina principalmente cuando su distribución es visceral.
                    </p> 
                    <p>
                        La dieta ideal para modificar la resistencia a la insulina deberá reducir el peso corporal, disminuir la masa grasa manteniendo la masa 
                        muscular y mejorar la sensibilidad a la insulina.
                    </p>
                    <p>
                        El rol de ciertos elementos nutricionales y botánicos en el manejo de la resistencia a la insulina ha cobrado fuerza en los últimos años. 
                        Minerales como magnesio, calcio, potasio, zinc, cromo y vanadio juegan un papel importante en el manejo de la resistencia a la insulina. 
                        Amino ácidos que incluyen a L-carnitina, taurina y L-arginina tienen también un rol importante en el manejo de la resistencia a la insulina.
                        Nutrientes adicionales como la coenzima Q10 participan en el control de esta alteración metabólica.
                    </p>
                                        
                    <br/>

                    <h5>
                        Si desea ver el articulo completo ingrese por medio del siguiente botón.
                    </h5>
                    <div className='btn-contain-viewPDF'>
                        <button>
                            <Link   to='/resistenciainsulinaViewPDF' >
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

export default ObesidadResistInsulinDesign
