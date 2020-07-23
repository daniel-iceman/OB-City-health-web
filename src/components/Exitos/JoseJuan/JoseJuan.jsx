import React, { useState, useEffect } from 'react'
import '../PacienteIndividual.css'
import JoseJuanDesign from './JoseJuanDesign'


function JoseJuan() {

    const [namePac] = useState('José Juan')
    const [skillPac] = useState('36 años - Bajó: 42.3 kg')
    const [phrasePac] = useState('"Al principio no creí que funcionaría, hoy no puedo creer los resultados"')
    const [speach_1_Pac] = useState('Tenía años con obesidad y siempre le di vueltas para atenderme. Tenía problemas con mi presión y mi colesterol y cuando llegué con el doctor tuvo que darme medicamento para controlarlos. Roncaba por las noches y seguido me despertaba con falta de aire.  Nunca antes habia estado en una dieta y me preocupaba que por mi ritmo de vida no pudiera llevarla.')
    const [speach_2_Pac] = useState('En mi trabajo no tenía horarios para comer y eso no me ayudaba en nada a mi peso, en lugar de bajar seguía subiendo, hasta que llegué con el doctor Díaz y empezamos el tratamiento. Me di cuenta lo equivocado que estaba ya que comia muchas cosas que pensaba eran sanas y era todo lo contario.  Aprendí mucho durante el tratamiento y eso me ayudará a no volver a subir.')
    const [speach_3_Pac] = useState('Aunque inicié escéptico, hice todo lo que el doctor me dijo y al pasar la semanas mi presión mejoró al grado de que me quito el medicamento que tomaba y mi colesterol llego a niveles normales, empecé a usar ropa que nunca pense poder ponerme y eso me dío mayor seguridad.   Hoy me siento un hombre nuevo, siento que me quitaron años de encima.')
    
    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div>
            <JoseJuanDesign 
                nombre = { namePac }
                resultados = { skillPac }
                frase = { phrasePac }
                testimonio1 = { speach_1_Pac }
                testimonio2 = { speach_2_Pac }
                testimonio3 = { speach_3_Pac }
            />
        </div>
    )
}

export default JoseJuan
