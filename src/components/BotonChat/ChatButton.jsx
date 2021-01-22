import React from 'react'
import './ChatButton.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

function ChatButton() {
    return (
        <div className='container-chatbutton'>
            {/* Desbloquear el div para que aparezca el icono del chat button y cambiar color en el css */}
            {/* <div className='chatbutton'>
                
                    <Link  to='/chat' >
                        <div>
                            <FontAwesomeIcon className='fontAwesomeChat'
                                    icon={faCommentDots}
                                    fixedWidth />
                            
                        </div>
                    </Link>
                
            </div> */}
            
        </div>
    )
}

export default ChatButton
