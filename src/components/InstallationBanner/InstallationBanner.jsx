import { Wrench, ArrowRight } from 'lucide-react'
import './InstallationBanner.css'

function InstallationBanner() {
  return (
    <section className="installation-banner">
      {/* Decoración sutil - hoja verde */}
      <div className="banner-decoration-leaf" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C12 2 8 6 8 10C8 14 12 18 12 18C12 18 16 14 16 10C16 6 12 2 12 2Z" fill="rgba(8, 174, 101, 0.08)" stroke="rgba(8, 174, 101, 0.15)" strokeWidth="1"/>
        </svg>
      </div>

      <div className="banner-content-wrapper">
        {/* Imagen */}
        <div className="banner-image-container">
          <div className="banner-new-badge">NUEVO</div>
          <img
            src="https://images.unsplash.com/photo-1567016432779-094069958ea5?w=400&h=250&fit=crop"
            alt="Instalación profesional de cortinas"
            className="banner-image"
          />
          <div className="banner-icon-circle">
            <Wrench size={24} strokeWidth={2} />
          </div>
        </div>

        {/* Contenido central */}
        <div className="banner-main-content">
          <div className="banner-header-with-button">
            <div className="banner-header">
              <h3 className="banner-title">Servicios de Instalación</h3>
              <p className="banner-description">
                Nos encargamos de instalar tus cortinas, muebles y otros elementos de forma segura y profesional, cuidando cada detalle para que todo quede perfecto.
              </p>
            </div>

            <a
              href="https://wa.me/3125278094?text=Hola, me interesa obtener información sobre los servicios de instalación."
              target="_blank"
              rel="noopener noreferrer"
              className="banner-cta-button"
            >
              Solicitar servicio
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstallationBanner
