import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

function SistemasCardsDesign({
    titulo_sistemas,
    texto_sistemas,
    pie_cards,
    boton_cards,
    abc_vineta_1,
    abc_vineta_2,
    abc_vineta_3,
    abc_vineta_4,
    abc_vineta_5,
    kiitos_vineta_1,
    kiitos_vineta_2,
    kiitos_vineta_3,
    kiitos_vineta_4,
    kiitos_vineta_5,
    cambridge_vineta_1,
    cambridge_vineta_2,
    cambridge_vineta_3,
    cambridge_vineta_4,
    cambridge_vineta_5,
    habito_vineta_1,
    habito_vineta_2,
    habito_vineta_3,
    habito_vineta_4,
    habito_vineta_5
}) {

    useEffect(() => {
        window.scroll(0,0)
      });

    return (
        <div className='card-container'>

            <div className='card-banner'>
                <div className='card-banner-filtro'/>
                <div className='card-text'>
                    <h1>
                        { titulo_sistemas }
                    </h1>
                    <p>
                        {/* hola */}
                        { texto_sistemas }
                    </p>
                </div>
            </div>
            
            <div className='cards'>
{/* **************** ABC - CARD ************** */}
                <div className='abc-card'>
                    <div className='header-abc-card'>

                    </div>

                    <div className='body-abc-card'>
                        <li><FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    style={{fontSize:'18px',
                                            color:'#303960',
                                            marginRight:'5px'}}/> 
                            { abc_vineta_1 } 
                        </li>
                        <li><FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    style={{fontSize:'18px',
                                            color:'#303960',
                                            marginRight:'10px'}}/> 
                            { abc_vineta_2 } 
                        </li>
                        <li><FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    style={{fontSize:'18px',
                                            color:'#303960',
                                            marginRight:'10px'}}/> 
                            { abc_vineta_3 } 
                        </li>
                        <li><FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    style={{fontSize:'18px',
                                            color:'#303960',
                                            marginRight:'10px'}}/> 
                            { abc_vineta_4 } 
                        </li>
                        <li><FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    style={{fontSize:'18px',
                                            color:'#303960',
                                            marginRight:'10px'}}/> 
                            { abc_vineta_5 } 
                        </li>
                        <p> { pie_cards } </p>

                    </div>

                    <div className='footer-abc-card'>
                        <div className='btn-border-descubreMas'>
                            <button className='btn-descubreMas'>
                                <Link  to='/protocoloabc' >
                                    <li> 
                                        { boton_cards }
                                    </li>
                                </Link>
                            </button>
                        </div>
                    </div>

                </div>

{/* **************** KIITOS - CARD ************** */}
                <div className='kiitos-card'>
                    <div className='header-kiitos-card'>

                    </div>

                    <div className='body-kiitos-card'>
                        <li><FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    style={{fontSize:'18px',
                                            color:'#303960',
                                            marginRight:'5px'}}/> 
                            { kiitos_vineta_1 } 
                        </li>
                        <li><FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    style={{fontSize:'18px',
                                            color:'#303960',
                                            marginRight:'10px'}}/> 
                            { kiitos_vineta_2 } 
                        </li>
                        <li><FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    style={{fontSize:'18px',
                                            color:'#303960',
                                            marginRight:'10px'}}/> 
                            { kiitos_vineta_3 } 
                        </li>
                        <li><FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    style={{fontSize:'18px',
                                            color:'#303960',
                                            marginRight:'10px'}}/> 
                            { kiitos_vineta_4 } 
                        </li>
                        <li><FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    style={{fontSize:'18px',
                                            color:'#303960',
                                            marginRight:'10px'}}/> 
                            { kiitos_vineta_5 } 
                        </li>
                        <p> { pie_cards } </p>

                    </div>

                    <div className='footer-kiitos-card'>
                        <div className='btn-border-descubreMas'>
                            <button className='btn-descubreMas'>
                                <Link  to='/kiitos' >
                                    <li> 
                                        { boton_cards }
                                    </li>
                                </Link>
                            </button>
                        </div>
                    </div>

                </div>

{/* **************** CAMBRIDGE - CARD ************** */}
                <div className='cambridge-card'>
                    <div className='header-cambridge-card'>

                    </div>

                    <div className='body-cambridge-card'>
                        <li><FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    style={{fontSize:'18px',
                                            color:'#303960',
                                            marginRight:'5px'}}/> 
                            { cambridge_vineta_1 } 
                        </li>
                        <li><FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    style={{fontSize:'18px',
                                            color:'#303960',
                                            marginRight:'10px'}}/> 
                            { cambridge_vineta_2 } 
                        </li>
                        <li><FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    style={{fontSize:'18px',
                                            color:'#303960',
                                            marginRight:'10px'}}/> 
                            { cambridge_vineta_3 } 
                        </li>
                        <li><FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    style={{fontSize:'18px',
                                            color:'#303960',
                                            marginRight:'10px'}}/> 
                            { cambridge_vineta_4 } 
                        </li>
                        <li><FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    style={{fontSize:'18px',
                                            color:'#303960',
                                            marginRight:'10px'}}/> 
                            { cambridge_vineta_5 } 
                        </li>
                        <p> { pie_cards } </p>

                    </div>

                    <div className='footer-cambridge-card'>
                        <div className='btn-border-descubreMas'>
                            <button className='btn-descubreMas'>
                                <Link  to='/cambridgeweightplan' >
                                    <li> 
                                        { boton_cards }
                                    </li>
                                </Link>
                            </button>
                        </div>
                    </div>

                </div>

{/* **************** HABITO - CARD ************** */}
                <div className='habito-card'>
                    <div className='header-habito-card'>

                    </div>

                    <div className='body-habito-card'>
                        <li><FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    style={{fontSize:'18px',
                                            color:'#303960',
                                            marginRight:'5px'}}/> 
                            { habito_vineta_1 } 
                        </li>
                        <li><FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    style={{fontSize:'18px',
                                            color:'#303960',
                                            marginRight:'10px'}}/> 
                            { habito_vineta_2 } 
                        </li>
                        <li><FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    style={{fontSize:'18px',
                                            color:'#303960',
                                            marginRight:'10px'}}/> 
                            { habito_vineta_3 } 
                        </li>
                        <li><FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    style={{fontSize:'18px',
                                            color:'#303960',
                                            marginRight:'10px'}}/> 
                            { habito_vineta_4 } 
                        </li>
                        <li><FontAwesomeIcon 
                                    icon={faCheckDouble} 
                                    style={{fontSize:'18px',
                                            color:'#303960',
                                            marginRight:'10px'}}/> 
                            { habito_vineta_5 } 
                        </li>
                        {/* <p> { pie_cards } </p> */}

                    </div>

                    <div className='footer-habito-card'>
                        <div className='btn-border-descubreMas'>
                            <button className='btn-descubreMas'>
                                <Link  to='/habitoalimenticio' >
                                    <li> 
                                        { boton_cards }
                                    </li>
                                </Link>
                            </button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default SistemasCardsDesign
            

            
