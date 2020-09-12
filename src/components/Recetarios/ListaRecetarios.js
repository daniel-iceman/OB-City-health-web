import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


function ListaRecetarios() {  

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div className='container-recetarios'>

            <div className='header-recetarios'>
                <h1>Recetas</h1>
                <p>Existe una variedad de opciones bajas en carbohidratos para que nuestros pacientes puedan apoyarse durante su tratamiento o durante la fase de mantenimiento, con las cuales podrán descubrir que comer bien, no es distinto de comer delicioso.</p>
            </div>
            <div className='recetarios-bloque-1'>

                <div className='platillo plat_1'>
                
                    <button>
                        <Link  to='/enchiladasdelechuga' >
                            <li>
                            </li>
                        </Link>
                    </button>
                    <p>Enchiladas de lechuga</p>
                </div>
                                    
                                
                               

                <div className='platillo plat_2'>
                    <button>
                        <Link  to='/tortilladevegetales' >
                            <li>                                 
                            </li>
                        </Link>
                    </button>
                    <p>Tortilla de vegetales</p>
                </div>

                <div className='platillo plat_3'>
                    <button>
                        <Link  to='/quicheespinacas' >
                            <li> 
                            </li>
                        </Link>
                    </button>
                    <p>Quiché de espinacas light</p>
                </div>

                <div className='platillo plat_4'>
                    <button>
                        <Link  to='/rollitosjamon' >
                            <li> 
                            </li>
                        </Link>
                    </button>
                    <p>Rollitos de lechuga con jamón</p>
                </div>

                <div className='platillo plat_5'>
                    <button>
                        <Link  to='/pannube' >
                            <li> 
                            </li>
                        </Link>
                    </button>
                    <p>Pan nube</p>
                </div>

                <div className='platillo plat_6'>
                    <button>
                        <Link  to='/pizzacoliflor' >
                            <li> 
                            </li>
                        </Link>
                    </button>
                    <p>Pizza con base de coliflor</p>
                </div>

                <div className='platillo plat_7'>
                    <button>
                        <Link  to='/chilerellenosincapear' >
                            <li> 
                            </li>
                        </Link>
                    </button>
                    <p>Chile relleno de queso</p>
                </div>


            </div>            
        </div>
    )
}

export default ListaRecetarios
