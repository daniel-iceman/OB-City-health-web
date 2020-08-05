import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SocialMediaInfluenzaArticulo from './SocialMediaInfluenzaArticulo';

function ObesidadInfluenzaDesign() {

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div className='container-articulo-resumen'>
            <div className='banner-articulo-resumen'>
                <h1>Obesidad e Influenza A H1N1.</h1>
                <p>Dr. Díaz D., Universidad La Salle, Certificado por el Consejo Mexicano para la Evaluación del Estudio de la Obesidad. </p>
            </div>
           <SocialMediaInfluenzaArticulo />

            <div className='info-articulo-resumen'>
                <div className='articulo-resumen'>
                    <h3>Resumen</h3>
                    <p>
                        La cepa H1N1 o H1N1 humana es un subtipo de Influenzavirus tipo A del virus de la gripe, perteneciente a la familia de los Orthomyxoviridae. El H1N1 ha mutado en diversos subtipos que incluyen la gripe española (extinta en la vida silvestre), la gripe porcina, la gripe aviar y la gripe bovina. La cepa mantiene su circulación 
                        después de haber sido reintroducida en la población humana en los años 1970.
                    </p> 
                    <p>
                        Desde mediados de marzo de 2009, al menos 900 casos mortales han ocurrido en Europa y América por la pandemia de una nueva cepa de H1N1, otras 100 muertes en México aún no están oficialmente confirmadas como casos de influenza H1N1. La situación al 14 de junio del 2009 registrada por la OMS es de 29.669 casos confirmados de gripe 
                        provocada por la nueva cepa del virus H1N1 y cientos de casos mortales en total a nivel mundial. Haciendo un seguimiento diario de los últimos datos publicados por la OMS, el número de pacientes declarados se dobla cada día en distintos países.
                    </p> 
                    <p>
                        En la mayoría de los casos, la infección por el subtipo H1N1 se manifiesta de forma similar y con síntomas clásicos a cualquier otro caso de infección por gripe común (influenza de tipo A), como aumento de secreción nasal, tos, dolor de garganta, fiebre alta (mayor a 38º C), malestar general, pérdida del apetito, dolor en los músculos, 
                        dolor en las articulaciones, vómitos, diarrea y, en casos de mala evolución, desorientación y pérdida de la conciencia. La diferencia radica en que el subtipo H1N1 es capaz de expresarse ocasionalmente de modo mortífero, aunque dichos casos son estadísticamente regulares (rondando el 45% aproximadamente del total de afectados).
                    </p>
                    <p>
                        En los últimos meses se ha encontrado una nueva relación de un estado físico-químico-metabólico con la Influenza y se trata de la obesidad. Aquel padecimiento considerado hoy en día una pandemia que día a día cobra miles de muertes en todo el mundo y me refiero a la obesidad no a la influenza que ha sido relacionada como detonador de decenas 
                        de enfermedades como la hipertensión, diabetes mellitus, resistencia a la insulina, hipercolesterolemia, hipertrigliceridemia, aterosclerosis, litiasis vesicular, artritis reumatoide, osteoartritis entre muchas, muchas otras enfermedades hasta llegar al cáncer hoy aparece como un factor de riesgo para que un paciente sea más vulnerable a contagiarse así como complicarse con el virus de la influenza tipo A H1N1.
                    </p>
                    <p>
                        "La obesidad mórbida es uno de los hallazgos más comunes en enfermos de gripe graves", aseguró a Bloomberg la responsable de investigación de pacientes con H1N1 de la OMS, Nikki Shindo. "Es un gran problema", dijo.
                    </p>
                    <p>
                        Esto es lo que convence a los expertos de que la obesidad y el sobrepeso constituyen factores de riesgo asociados al H1N1. "Ser obeso es un factor asociado a la enfermedad cuando se manifiesta de forma virulenta, pero es pronto para determinar si es un factor decisivo", señaló Joan Guix, director de Salud Pública de Tarragona.
                    </p>    
                                        
                    <br/>

                    <h5>
                        Si desea ver el articulo completo ingrese por medio del siguiente botón.
                    </h5>
                    <div className='btn-contain-viewPDF'>
                        <button>
                            <Link   to='/influenzaViewPDF' >
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

export default ObesidadInfluenzaDesign
