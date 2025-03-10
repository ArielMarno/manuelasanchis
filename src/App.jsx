import './App.css'
import About from './components/about/About'
import Clients from './components/clients/Clients'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Proyects from './components/proyects/Proyects'
import Services from './components/services/Services'

function App() {
  return (
    <>
      <Home />
      <Services />
      <Proyects />
      <About />
      <Clients />
      <Footer />
    </>
  )
}

export default App
