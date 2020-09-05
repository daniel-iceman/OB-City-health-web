import React from 'react';
// import "bootstrap/dist/css/bootstrap.css";
import './Tarea.css'

const Check = ({ checked, onClick }) => {
    if (checked === true) {
        return (
            <span
                className='material-icons do-it text-success'
                style={{ cursor:'pointer'}}
                onClick={ onClick }
            >
                {/* check_circle_outline */}
                thumb_up_alt
            </span>
        );
    } else {
        return (
            <span
                className='material-icons incomplete'
                style={{ cursor:'pointer'}}
                onClick={ onClick }
            >
                {/* check_circle_outline */}
                thumb_down
            </span>
        );
    }
};

export default Check

