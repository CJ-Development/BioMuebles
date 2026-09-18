import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Servicios from './pages/Servicios/Servicios'
import Nosotros from './pages/Nosotros/Nosotros'
import Header from './components/Header/Header'
import WhatsAppFloatingBubble from './components/WhatsAppFloatingBubble/WhatsAppFloatingBubble'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      <WhatsAppFloatingBubble />
    </BrowserRouter>
  )
}

export default App