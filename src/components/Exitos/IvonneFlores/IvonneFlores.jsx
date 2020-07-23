import React, { useState, useEffect } from 'react'
import IvonneFloresDesign from './IvonneFloresDesign'
import '../PacienteIndividual.css'

function IvonneFlores() {

    const [namePac] = useState('Ivonne')
    const [skillPac] = useState('45 años - Bajó: 13.5 kg')
    const [phrasePac] = useState('"Hoy me siento increíble.  Logré perder 13.5 kg y el cambio es muy evidente."')
    const [speach_1_Pac] = useState('Yo llevaba muchos años sin bajar de peso y ya había intentado de todo y nada me funcionaba. No tenía ninguna ilusión para pararme de mi cama y no se diga el arreglarme o ir a una tienda a comprarme algo para mí. El no poder bajar de peso me generaba ansiedad. Yo tenía muchos problemas de salud con mi espalda, mis rodillas y tobillos.')
    const [speach_2_Pac] = useState('Nada lograba un cambio bueno en mi estado de ánimo, hasta que llegué con Dany, mi doctor. Él me platicó del sistema Cambridge Weight Plan para bajar de peso y me dijo que era posible que yo lograra con este método lo que no había conseguido con ninguna dieta. Comencé con el Sistema Cambridge Weight Plan y, aunque por momentos fue difícil, lo logré. Los alimentos de Cambridge tienen sabores deliciosos, quedas satisfecha, tienen todos los nutrientes que tu cuerpo necesita y lo más maravilloso es que te permiten ver resultados inmediatamente y eso ¡te motiva a seguir adelante!!!')
    const [speach_3_Pac] = useState('Y, sobre todo, el respaldo que tienes con un profesional de la salud es increíble. Confieso que gran parte de mi éxito en pérdida de peso se lo debo a Dany, mi doctor, que siempre me está animando a lograr mi meta.')
    
    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div>
            <IvonneFloresDesign 
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

export default IvonneFlores
