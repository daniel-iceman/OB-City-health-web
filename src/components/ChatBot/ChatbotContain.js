import React, { useEffect } from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Steps from './ChatbotSteps'
import ChatStyles from './ChatbotStyles'
// import './ChatBot.css'


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
                        headerTitle="¿Tienes dudas?"
                        style={{fontSize:'18px' }}
                    />  
                </ThemeProvider>      

            </div>
        </div>        
    )
    
}


export default ChatbotContain
