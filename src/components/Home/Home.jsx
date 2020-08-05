import React, { useState, useEffect } from 'react'
import './Home.css'
import HomeBanner from './HomeBanner'
import HomeLinks from './HomeLinks'
import HomeIntro from './HomeIntro'
import SocialMediaHome from './SocialMediaHome'
import ModalHome from './ModalHome'

function Home() {

    useEffect(() => {
        window.scroll(0,0)
      });
      
    // Texto Banner
    const [titBanner] = useState ('Bajar de peso y no volver a subir es sencillo')
    const [txtBanner] = useState ('si estás en el lugar indicado')

    // Texto Intro
    const [titIntro] = useState ('Experiencia y actualidad conjugadas')
    const [txtIntro] = useState ('OB City health cuenta con mas de 20 años de experiencia en el manejo de sobrepeso y obesidad, así como trastornos cardiometabolicos provocados por ellos.')


    return (
        <div className='home-container' >
            
            <HomeBanner
                tituloBanner={titBanner}
                textoBanner={txtBanner}
            />
            <HomeIntro 
                tituloIntro={titIntro}
                textoIntro={txtIntro}
            />
            <SocialMediaHome />
            <HomeLinks />
            <ModalHome />
        </div>
    )
}

export default Home
