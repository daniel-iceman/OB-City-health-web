import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ChatBot from './pages/ChatBotPage'
import ServiciosPage from './pages/ServiciosPage'
import AcercaPage from './pages/AcercaDePage'
import ArticulosPage from './pages/ArticulosPage'
import ContactoPage from './pages/ContactoPage'
import SistemasCardsPage from './pages/SistemasCardsPage'
import ProtocoloABC from './pages/ProtocoloABCPage'
import Cambridge from './pages/CambridgePage'
import Habito from './pages/HabitoPage'
import RecetariosPage from './pages/RecetariosPage'
import TelemedicinaPage from './pages/TelemedicinaPage'
import PricePage from './pages/PricePage'
import PDFPricePage from './pages/pdfPrisePage'
import ArticuloObesidadCovid from './pages/ObesidadCovid19Page'
import PDFObesidadCovid from './pages/pdfArticuloSARSCOV2Page'
import ArticuloObesidadInfluenza from './pages/ObesidadInfluenzaPage'
import PDFObesidadInfluenza from './pages/pdfArticuloInfluenzaPage'
import ArticuloObesidadResistenciaInsulina from './pages/ObesidadResistenciaInsulinaPage'
import PDFResistenciaInsulina from './pages/pdfArticuloResistInsulinPage'
import ArticuloObesidadEmbarazo from './pages/ObesidadEmbarazoPage'
import PDFEmbarazo from './pages/pdfArticuloEmbarazoPage'
import ArticuloOsteoarticular from './pages/ObesidadOsteoarticularPage'
import PDFOsteoarticular from './pages/pdfArticuloOsteoarticularPage'
import ExitosPage from './pages/ExitosPage'
import IvonneFlores from './pages/ExitoIvoneFloresPage'
import JoseJuan from './pages/ExitoJoseJuanPage'
import MariaLuisa from './pages/ExitoMariaLuisaPage'
import Carlos from './pages/ExitoCarlosPage'
import Covid from './pages/Covid19Page'
import PsicologiaPage from './pages/PsicologiaPage'
import EnchiladasDeLechuga from './pages/RecetaEnchiladasDeLechugaPage'
import TortillaDeVegetales from './pages/RecetaTortillaVegetalesPage'
import QuicheEspinacas from './pages/RecetaQuicheEspinacasPage'
import RollitosJamon from './pages/RecetaRollitosJamonPage'
import PanNube from './pages/RecetaPanNubePage'
import PizzaColiflor from './pages/RecetaPizzaColiflorPage'

function Routes() {
    return (
        
        
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/chat" component={ChatBot} />
            <Route exact path="/servicios" component={ServiciosPage} />
            <Route exact path="/acerca" component={AcercaPage} />
            <Route exact path="/articulos" component={ArticulosPage} />
            <Route exact path="/contacto" component={ContactoPage} />
            <Route exact path="/sistemas" component={SistemasCardsPage} />
            <Route exact path="/protocoloabc" component={ProtocoloABC} />
            <Route exact path="/cambridgeweightplan" component={Cambridge} />
            <Route exact path="/habitoalimenticio" component={Habito} />
            <Route exact path="/recetarios" component={RecetariosPage} />
            <Route exact path="/telemedicina" component={TelemedicinaPage} />
            <Route exact path="/price" component={PricePage} />
            <Route exact path="/priceViewPDF" component={PDFPricePage} />
            <Route exact path="/emocionesyalimentacion" component={PsicologiaPage} />
            <Route exact path="/articulo_covid19" component={ArticuloObesidadCovid} />            
            <Route exact path="/covid19ViewPDF" component={PDFObesidadCovid} />
            <Route exact path="/articulo_influenza" component={ArticuloObesidadInfluenza} />
            <Route exact path="/influenzaViewPDF" component={PDFObesidadInfluenza} />
            <Route exact path="/articulo_resistenciainsulina" component={ArticuloObesidadResistenciaInsulina} />
            <Route exact path="/resistenciainsulinaViewPDF" component={PDFResistenciaInsulina} />
            <Route exact path="/articulo_embarazo" component={ArticuloObesidadEmbarazo} />
            <Route exact path="/embarazoyobesidadViewPDF" component={PDFEmbarazo} />
            <Route exact path="/articulo_osteoarticular" component={ArticuloOsteoarticular} />
            <Route exact path="/osteoarticularViewPDF" component={PDFOsteoarticular} />
            <Route exact path="/exitos" component={ExitosPage} />
            <Route exact path="/exitosIvonne" component={IvonneFlores} />
            <Route exact path="/exitosJoseJuan" component={JoseJuan} />
            <Route exact path="/exitosMariaLuisa" component={MariaLuisa} />
            <Route exact path="/exitosCarlos" component={Carlos} />
            <Route exact path="/covid19" component={Covid} />
            <Route exact path="/enchiladasdelechuga" component={EnchiladasDeLechuga} />
            <Route exact path="/tortilladevegetales" component={TortillaDeVegetales} />
            <Route exact path="/quicheespinacas" component={QuicheEspinacas} />
            <Route exact path="/rollitosjamon" component={RollitosJamon} />
            <Route exact path="/pannube" component={PanNube} />
            <Route exact path="/pizzacoliflor" component={PizzaColiflor} />
        </Switch>

        
    )
}

export default Routes
