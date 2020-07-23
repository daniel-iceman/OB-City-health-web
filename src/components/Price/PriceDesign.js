import React from 'react'
import {Link} from 'react-router-dom'

function PriceDesign({
    parrafo1,
    parrafo2,
    parrafo3,
    parrafo4,
    parrafo5
}) {
    return (
        <div className='container-price'>
            <div className='banner-price'>
                <h1>PRISE</h1>
            </div>

            <div className='cont-info-price'>

                <div className='info-price'>
                    <div className='cont-imagen-price'>
                        <div className='imagen-price'/>
                    </div>

                    <div className='resumen-price'>
                        <p>
                            { parrafo1 }
                        </p>
                        <p>
                            { parrafo2 }
                        </p>
                        <p>
                            { parrafo3 }
                        </p>
                        <p>
                            { parrafo4 }
                        </p>
                        <p>
                            { parrafo5 }
                        </p>
                    </div>

                    <div className='botones-price'>
                        <div className='btn-price-pdfView'>
                            <Link to='/priceViewPDF' >
                                <button >
                                    Ver "Salud v.s. Costos"
                                </button>
                            </Link>
                        </div>
                        <div className='btn-price-contacto'>
                            <Link to='/contacto' >
                                <button >
                                    Contáctenos
                                </button>
                            </Link>
                        </div>
                    </div>          
                </div>        

            </div>
            
        </div>
    )
}

export default PriceDesign
