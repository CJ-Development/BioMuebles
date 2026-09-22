import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import Logo from '../../assets/images/Logo.png'
import ServiceModal from '../ServiceModal/ServiceModal'

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="whatsapp-icon">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const isActive = (path) => location.pathname === path

  return (
    <header className="site-header">
      <div className="header-container">

        {/* Logo */}
        <Link to="/" className="header-logo" onClick={closeMenu}>
        <img src={Logo} alt="BioMuebles Colombia" className="header-logo-image"/>
        </Link>

        {/* Navegación escritorio */}
        <nav className="desktop-nav" aria-label="Navegación principal">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            Inicio
          </Link>

          <Link to="/servicios" className={`nav-link ${isActive('/servicios') ? 'active' : ''}`}>
            Servicios
          </Link>

          <Link to="/nosotros" className={`nav-link ${isActive('/nosotros') ? 'active' : ''}`}>
            Nosotros
          </Link>
        </nav>

        {/* Botón WhatsApp escritorio */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="header-whatsapp"
        >
          <WhatsAppIcon />
          <span>Cotizar por WhatsApp</span>
          <ArrowRight size={17} strokeWidth={2.5} />
        </button>

        {/* Botón menú móvil */}
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menú móvil */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <nav aria-label="Navegación móvil">
          <Link to="/" onClick={closeMenu}>
            Inicio
          </Link>

          <Link to="/servicios" onClick={closeMenu}>
            Servicios
          </Link>

          <Link to="/nosotros" onClick={closeMenu}>
            Nosotros
          </Link>

          <button
            onClick={() => {
              setIsModalOpen(true)
              closeMenu()
            }}
            className="mobile-whatsapp"
          >
            <WhatsAppIcon />
            Cotizar por WhatsApp
            <ArrowRight size={17} />
          </button>
        </nav>
      </div>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        whatsappNumber="573017921784"
        defaultMessage="Hola, me interesa obtener una cotización para servicios de limpieza profesional."
      />
    </header>
  )
}

export default Header