import React, { useEffect }  from 'react'
import './Recetarios.css'
import ListaRecetarios from './ListaRecetarios'

function Recetarios() {

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div>
            <ListaRecetarios 
                // imagen_receta_1={rec1_foto}
            />
            
        </div>
    )
}

export default Recetarios
