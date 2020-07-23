import React from 'react'
import { Link } from 'react-router-dom'

function RecetariosBanner() {
    return (
        <div className='container-banner-2'>

            <div className='texto-banner-recetarios'>
                <h1>Recetas</h1>
                <h2>Comer sano no está peleado con comer delicioso</h2>
                <p>Este grupo de recetas podrán darte una idea clara de que puedes lograr tus objetivos disfrutando de ricos platillos sin sacrificarte.</p>
                <button>
                    <Link className='btn-vermas-recetarios'  to='/recetarios' >
                        <li> 
                            Ver más.
                        </li>
                    </Link>
                </button>
            </div>        

            <div className='imagen-banner-recetarios' />               
            
        </div>
    )
}

export default RecetariosBanner
            
     
