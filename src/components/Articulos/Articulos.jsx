import React, { useEffect } from 'react'
import './Articulos.css'
import { Link } from 'react-router-dom'

function Articulos() {

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div className='container-articulos'>

                <div className='imagen-articulos'>
                    <h1>
                        Artículos
                    </h1>
                </div>

            <div className='contenedor-titulos-articulos'>

                <div className='titulos-container'>
                    
                        <Link   to='/articulo_covid19' >
                            <li> 
                                <h2>SARS-CoV-2: Impacto en padecimientos crónico degenerativos y obesidad.</h2> 
                                <p>Dr. Daniel Díaz Universidad La Salle, Colegio Mexicano de Bariatría, Certificado por el Consejo Mexicano para la Evaluación del Estudio de la
                                    Obesidad, Certificado por el Instituto del Corazón de la Universidad de Sao Paulo Brasil (InCor).</p>
                            </li>
                        </Link>
                        <br/>
                        <Link   to='/articulo_influenza' >
                            <li> 
                                <h2>Obesidad e Influenza A H1N1.</h2> 
                                <p>Dr. Daniel Díaz Universidad La Salle, Colegio Mexicano de Bariatría, Certificado por el Consejo Mexicano para la Evaluación del Estudio de la
                                    Obesidad, Certificado por el Instituto del Corazón de la Universidad de Sao Paulo Brasil (InCor).</p>
                            </li>
                        </Link>
                        <br/>
                        <Link   to='/articulo_osteoarticular' >
                            <li> 
                                <h2>Obesidad y su relación con las alteraciones Osteoarticulares en el ser humano.</h2> 
                                <p>Dr. Daniel Díaz Universidad La Salle, Colegio Mexicano de Bariatría, Certificado por el Consejo Mexicano para la Evaluación del Estudio de la
                                    Obesidad, Certificado por el Instituto del Corazón de la Universidad de Sao Paulo Brasil (InCor).</p>
                            </li>
                        </Link>
                        <br/>                        
                        <Link   to='/articulo_embarazo' >
                            <li> 
                                <h2>Embarazo y obesidad.</h2> 
                                <p>Dr. Daniel Díaz Universidad La Salle, Colegio Mexicano de Bariatría, Certificado por el Consejo Mexicano para la Evaluación del Estudio de la
                                    Obesidad, Certificado por el Instituto del Corazón de la Universidad de Sao Paulo Brasil (InCor).</p>
                            </li>
                        </Link>
                        <br/>
                        <Link   to='/articulo_resistenciainsulina' >
                            <li> 
                                <h2>Resistencia a la Insulina y la intervención de la Nutriterapia.</h2> 
                                <p>Dr. Daniel Díaz Universidad La Salle, Colegio Mexicano de Bariatría, Certificado por el Consejo Mexicano para la Evaluación del Estudio de la
                                    Obesidad, Certificado por el Instituto del Corazón de la Universidad de Sao Paulo Brasil (InCor).</p>
                            </li>
                        </Link>
                        
                   
                    
                </div>

            </div>
            
            
        </div>
    )
}

export default Articulos
