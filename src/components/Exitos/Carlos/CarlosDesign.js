import React from 'react'

function CarlosDesign({
    nombre,
    resultados,
    frase,
    testimonio1,
    testimonio2,
    testimonio3
}) {
    return (
        <div className='container-pacienteIndividual'>
            <div className='titulo-pacienteIndividual'>
                
                <div className='titulo-texto-pacienteIndividual'>
                    <h1> Casos de éxito </h1>
                </div>
            </div>

            <div className='about-paciente'>
                <div className='bloque1-aboutPaciente'>
                    <div className='imagen-paciente'>
                        <div className='foto-Carlos generalImage'></div>
                    </div>
                    <div className='testimonial-paciente'>  
                        <h1>
                            { nombre }
                        </h1>

                        <div className='edad-peso-paciente' >
                            <h3>
                                { resultados }
                            </h3>
                        </div>                        
                        <h2>
                            { frase }
                        </h2>
                        <p>
                            { testimonio1 }
                        </p>
                        <p>
                            { testimonio2 }
                        </p>
                        <p> 
                            { testimonio3 }
                        </p>
                    </div>
                </div>
                        

                <div className='bloque2-aboutPaciente'>
                    <div className='subBloque-antes'>
                        <div className='foto-Carlos-antes' />
                    </div>

                    <div className='subBloque-despues'>
                        <div className='foto-Carlos-despues' />
                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default CarlosDesign
