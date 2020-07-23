import React from 'react'

function HomeIntro({ tituloIntro, textoIntro }) {
    return (
        <div className='container-home-intro'>
            <h1> { tituloIntro } </h1>
            <div className='adorno-intro' />
            <h2> { textoIntro }</h2>
        </div>
    )
}

export default HomeIntro
