import React, { Component } from 'react'
import Routes from './Routes'
import BarraMenu from './components/NavBar/BarraMenu/BarraMenu'
import ChatButton from './components/BotonChat/ChatButton'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      
        <div>
          <BarraMenu />
          <Routes />  
          <ChatButton />
          <Footer />      

        </div>
      
        
        )
      }
    }
    
    export default App
    

