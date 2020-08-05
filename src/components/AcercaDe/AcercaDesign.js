import React, { useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function AcercaDesign() {

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div className='container-acercaDe'>   
            <div className='banner-acercaDe'>
               <h1> Acerca de </h1>
            </div>
            
            <div className='cont-informacion-acercaDe'>
                <div className='informacion-acercaDe'>

                    <div className='info-obcity-cont'>

                        <div className='imagen-acercaDe-container'>
                            <div className='imagen-acercaDE' />
                        </div>
                        <div className='info-obcity'>
                            <p>
                                OB City health cuenta con más de 20 años de experiencia en el manejo y control del sobrepeso y la obesidad así como enfermedades asociadas como diabetes, hipertensión, dislipidemias, síndrome metabólico, hígado graso, problemas articulares, apnea obstructiva del sueño, ovarios poliquisticos, alteraciones en la inmunidad entre muchos otros más.
                            </p>
                        </div>
                    </div>

                    <div className='cont-info-drDiaz'>

                        <div className='info-drDiaz'>
                            <h3>
                                Dr. Díaz 
                            </h3>
                            <h4>
                                <FontAwesomeIcon icon={faGraduationCap} className='FontAwseomeAcercaDe'/>
                                Curriculum
                            </h4>
                            <p>
                                Egresado de La Facultad Mexicana de Medicina de La Universidad La Salle.
                            </p>
                            <p>
                                Colegio Mexicano de Bariatria A.C.
                            </p>
                            <p>
                                Certificado por el Consejo Mexicano para la Evaluación del Estudio de la Obesidad.   (Organo de Certificación en Bariatría Clínica)  Reg. No. 96373
                            </p>
                            <p>
                                Certificado por El Centro Internacional de Salud "La Pradera" del polo cientifico oeste de la Habana.
                            </p>
                            <p>
                                Certificado por el Instituto del Corazón de la Universidad de Sao Paulo Brasil (InCor).   "Cardiología en el Obeso"
                            </p>
                            <p>
                                Miembro de la Sociedad Latinoamericana de Aterosclerosis (SOLAT).   "Cardiología en el Obeso"
                            </p>
                            <p>
                                Consultor del sistema "Cambridge Weight Plan" desde 2004.
                            </p>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AcercaDesign
