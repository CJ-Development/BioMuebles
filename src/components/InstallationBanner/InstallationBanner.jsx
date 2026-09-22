import { Wrench, ArrowRight, BookOpen } from 'lucide-react'
import './InstallationBanner.css'
import { useState } from 'react'
import ServiceModal from '../ServiceModal/ServiceModal'
import InstalacionCortinas from '../../assets/services/Instalacion Cortinas.png'

function InstallationBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="service-category category-instalacion">
      <h3 className="category-title">
        Servicios de Instalación
      </h3>

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
              src={InstalacionCortinas}
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
                <h4 className="banner-subtitle">Instalación de Cortinas</h4>
                <p className="banner-description">
                Dale a tus espacios el acabado que merecen. Instalamos tus cortinas de manera segura, precisa y profesional, cuidando cada detalle para que luzcan perfectas y se adapten a tu espacio.
                </p>
              </div>

              <div className="banner-buttons-wrapper">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="banner-cta-button"
                >
                  Solicitar servicio
                  <ArrowRight size={16} />
                </button>

                <a
                  href="/Catalogo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="banner-catalog-button"
                >
                  <BookOpen size={16} />
                  Ver catálogo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        whatsappNumber="3125278094"
        defaultMessage="Hola, me interesa obtener información sobre los servicios de instalación de cortinas."
      />
    </div>
  )
}

export default InstallationBanner
