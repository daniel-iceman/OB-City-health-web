import React from 'react'
import './ChatButton.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

function ChatButton() {
    return (
        <div className='container-chatbutton'>
            <div className='chatbutton'>
                {/* <button> */}
                    <Link  to='/chat' >
                        <li>
                            <FontAwesomeIcon className='fontAwesomeChat'
                                    icon={faComment} />
                            
                        </li>
                    </Link>
                {/* </button> */}
            </div>
            
        </div>
    )
}

export default ChatButton
