import React, { useEffect } from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Steps from './ChatbotSteps'
import ChatStyles from './ChatbotStyles'
// import './ChatBot.css'
import logoOBCITY from '..//Images/logo192.png'

function ChatbotContain() {

    useEffect(() => {
        window.scroll(0,0)
      });
    
    return (
        <div className='chatbot-area'>
            <div className='texto-bienvenida-chat'>
                <h1>Bienvenid@ a nuestro chat</h1>
                <p>En el podrás resolver muchas de tus dudas.</p>
            </div>
            <div className='ventana-chat'>
                <ThemeProvider theme={ChatStyles} >
                    <ChatBot
                        steps={Steps}
                        headerTitle="¿Tiene dudas?"
                        style={{fontFamily:'Questrial', fontSize:'16px', letterSpacing:'1px', textAlign:'center' }}
                        placeholder="Escribe tu respuesta"
                        bubbleOptionStyle={{background:'rgb(7, 156, 144)' }}
                        botAvatar={logoOBCITY}
                    />  
                </ThemeProvider>      

            </div>
        </div>        
    )
    
}


export default ChatbotContain
