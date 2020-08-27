import React from 'react'
import {connect} from 'react-redux'
import {changeUserNameAction} from '../../redux/userDuck'

function Profile({user, changeUserNameAction}) {
    return (
        <div>
            <img width='200px' src={user.photoURL} alt="userImage"/>
            <h2>Hola {user.displayName}</h2>
            {/* <input onChange={event=>changeUserNameAction(event.target.value)} value={user.name} /> */}
        </div>
    )
}

function mapState({user}){
    return {
        user
    }
}

export default connect(mapState, {changeUserNameAction}) (Profile)
