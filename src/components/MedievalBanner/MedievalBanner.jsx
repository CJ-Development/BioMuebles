import './MedievalBanner.css'

function MedievalBanner({ title, children, variant = 'blue' }) {
  return (
    <div className={`medieval-banner medieval-banner-${variant}`}>
      {/* Soporte/palo superior */}
      <div className="banner-support">
        <div className="banner-support-left"></div>
        <div className="banner-support-right"></div>
      </div>

      {/* Cuerpo principal de la banderola */}
      <div className="banner-body">
        {/* Decoración superior */}
        <div className="banner-decoration-top">
          <div className="banner-ornament-left"></div>
          <div className="banner-ornament-right"></div>
        </div>

        {/* Contenido */}
        <div className="banner-content">
          {title && <h4 className="banner-title">{title}</h4>}
          <div className="banner-text">{children}</div>
        </div>

        {/* Decoración inferior */}
        <div className="banner-decoration-bottom">
          <div className="banner-ornament-left"></div>
          <div className="banner-ornament-right"></div>
        </div>
      </div>

      {/* Punta inferior V */}
      <div className="banner-point">
        <svg viewBox="0 0 40 40" className="banner-point-svg">
          <path d="M0 0 L40 0 L20 40 Z" />
        </svg>
      </div>
    </div>
  )
}

export default MedievalBanner
