import React, { useState, useEffect } from 'react'
import '../PacienteIndividual.css'
import CarlosDesign from './CarlosDesign'

function Carlos() {

    const [namePac] = useState('Carlos')
    const [skillPac] = useState('45 años - Bajó: 36 kg')
    const [phrasePac] = useState('"Hoy mis estudios médicos son excelentes"')
    const [speach_1_Pac] = useState('Cuando me casé, hace 18 años, comencé a ganar peso poco a poco; En la medida en que lo hacia, dejé de hacer deporte. Un día sufrí lesiones deportivas y cada día deje de hacer menos ejercicio hasta que lo dejé por completo. Además mis hábitos alimenticios fueron terribles por mucho tiempo.')
    const [speach_2_Pac] = useState('Un día me hice unos estudios, cosa que nunca hacía, y me di cuenta que mis niveles de triglicéridos y ácido úrico estaban altísimos; tenía Gota. Comencé a tomar medicamento pero no mejoraba mucho.')
    const [speach_3_Pac] = useState('Hoy me compro ropa que me gusta, que nunca me compraba, porque no hay mucha ropa para personas obesas, lo mejor es disfrutar de quitarme la playera sin pena en la playa o en una alberca.  Lo que más agradezco es que hoy mis estudios médicos son excelentes, ya no tomo medicina para nada, me siento muy bien y bajé 10 tallas. Tengo un reto muy grande conmigo mismo y con mi familia de no volver a subir, muchos amigos y familiares piensan que voy a tener rebote por haber hecho esta dieta y mi propósito es que esto no suceda.')

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div>
            <CarlosDesign 
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

export default Carlos
