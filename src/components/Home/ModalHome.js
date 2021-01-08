import React, { useState } from 'react'
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ModalHome.css"
import {Link} from 'react-router-dom'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function ModalHome() {

    const [isOpen, setIsOpen] = useState(true);

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="modal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
         
            <Modal 
                className='modal-box'
                show={isOpen} 
                onHide={hideModal} // Este solo se pone si deseamos que al dar click fuera del modal se cierre, de lo contrario no se cerrara.
                centered
                size="xl"
                backdrop= "false"
            >
                {/* <Modal.Header className='mod-header-section'>
                        <Modal.Title></Modal.Title>
                        
                </Modal.Header> */}

                <Modal.Body className='mod-body-section' >
                    <div className='mod-body-text'>
                        <h1>#estamoscontigo</h1>
                        <h3>Si vives lejos o no deseas salir, quedate en casa, también contamos con consultas online, conoce nuestro sistema de medicina a distancia.</h3>
                    </div>           
                    
                </Modal.Body>

                <Modal.Footer className='mod-footer-section'>
                    <button 
                        onClick={hideModal}
                        type="button" 
                        class="btn btn-secondary" 
                        data-dismiss="modal">
                            Cerrar
                    </button>

                    <Link to='/telemedicina' >
                        <button 
                            className='btn btn-primary' 
                            type="button">
                            Consultas online
                        </button>
                    </Link>
                </Modal.Footer>
        </Modal>
        </div>
            
        
    )
}

export default ModalHome
