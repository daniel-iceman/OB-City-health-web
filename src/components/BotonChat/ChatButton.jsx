import React from 'react'
import './ChatButton.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

function ChatButton() {
    return (
        <div className='container-chatbutton'>
            <div className='chatbutton'>
                {/* <button> */}
                    <Link  to='/chat' >
                        <div>
                            <FontAwesomeIcon className='fontAwesomeChat'
                                    icon={faCommentDots}
                                    fixedWidth />
                            
                        </div>
                    </Link>
                {/* </button> */}
            </div>
            
        </div>
    )
}

export default ChatButton
