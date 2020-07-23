import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function PacientesExito() {

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div className='container-pacientes'>

            <div className='header-pacientes'>
                <h1>Casos de éxito</h1>
                <p>Así como ellos, tu puedes lograrlo y convertirte en un triunfador.</p>
            </div>
            <div className='pacientes-bloque-1'>

                <div className='paciente pac_1'>
                
                    <button>
                        <Link  to='/exitosIvonne' >
                            <li>
                            </li>
                        </Link>
                    </button>
                    <h3>Ivonne</h3>
                    <p>Perdió 13.5 kg</p>
                </div>                                
                                
                <div className='paciente pac_2'>
                    <button>
                        <Link  to='/exitosJoseJuan' >
                            <li>                                 
                            </li>
                        </Link>
                    </button>
                    <h3>José Juan</h3>
                    <p>Perdió 42.3 kg</p>
                </div>
                               
                <div className='paciente pac_3'>
                    <button>
                        <Link  to='/exitosMariaLuisa' >
                            <li>                                 
                            </li>
                        </Link>
                    </button>
                    <h3>María Luisa</h3>
                    <p>Perdió 16 kg</p>
                </div>

                <div className='paciente pac_4'>
                    <button>
                        <Link  to='/exitosCarlos' >
                            <li>                                 
                            </li>
                        </Link>
                    </button>
                    <h3>Carlos</h3>
                    <p>Perdió 36 kg</p>
                </div>

            </div>            
        </div>
    )
}

export default PacientesExito


                


