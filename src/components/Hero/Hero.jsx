import {
  ArrowRight,
  ShieldCheck,
  Leaf,
  Settings,
  House,
} from 'lucide-react'

import { Link } from 'react-router-dom'
import HeroImage from '../../assets/hero/hero1.png'
import './Hero.css'


/* =====================================================
   ICONO WHATSAPP
===================================================== */

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="whatsapp-icon"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)


/* =====================================================
   BENEFICIOS
===================================================== */

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Atención profesional',
  },
  {
    icon: Leaf,
    title: 'Productos seguros',
  },
  {
    icon: Settings,
    title: 'Equipos especializados',
  },
  {
    icon: House,
    title: 'Servicio a domicilio',
  },
]


/* =====================================================
   HERO
===================================================== */

function Hero() {
  return (
    <section className="hero">

      {/* =================================================
          BURBUJAS
      ================================================= */}

      <span className="hero-bubble hero-bubble-1"></span>
      <span className="hero-bubble hero-bubble-2"></span>
      <span className="hero-bubble hero-bubble-3"></span>
      <span className="hero-bubble hero-bubble-4"></span>
      <span className="hero-bubble hero-bubble-5"></span>
      <span className="hero-bubble hero-bubble-6"></span>
      <span className="hero-bubble hero-bubble-7"></span>
      <span className="hero-bubble hero-bubble-8"></span>
      <span className="hero-bubble hero-bubble-9"></span>
      <span className="hero-bubble hero-bubble-10"></span>
      <span className="hero-bubble hero-bubble-11"></span>
      <span className="hero-bubble hero-bubble-12"></span>
      <span className="hero-bubble hero-bubble-13"></span>
      <span className="hero-bubble hero-bubble-14"></span>
      <span className="hero-bubble hero-bubble-15"></span>
      <span className="hero-bubble hero-bubble-16"></span>
      <span className="hero-bubble hero-bubble-17"></span>
      <span className="hero-bubble hero-bubble-18"></span>
      <span className="hero-bubble hero-bubble-19"></span>
      <span className="hero-bubble hero-bubble-20"></span>

      {/* =================================================
          CONTENEDOR PRINCIPAL
      ================================================= */}

      <div className="hero-container">

        {/* =================================================
            CONTENIDO IZQUIERDO
        ================================================= */}

        <div className="hero-content">

          {/* Texto pequeño */}

          <span className="hero-eyebrow">
            SERVICIOS PROFESIONALES DE LIMPIEZA
          </span>


          {/* Título */}

          <h1>
            Dale una nueva vida
            <br />
            <span>a tus espacios</span>
          </h1>


          {/* Descripción */}

          <p className="hero-description">
            Limpieza profunda, higienización y cuidado profesional
            para muebles, colchones, alfombras, cortinas,
            tapicería, vehículos y mucho más.
          </p>


          {/* =================================================
              BOTONES
          ================================================= */}

          <div className="hero-actions">

            {/* WhatsApp */}

            <a
              href="https://wa.me/573017921784"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button hero-button-primary"
            >
              <WhatsAppIcon />

              <span>
                Solicitar cotización
              </span>
            </a>


            {/* Servicios */}

            <Link
              to="/servicios"
              className="hero-button hero-button-secondary"
            >
              <span>
                Ver servicios
              </span>

              <ArrowRight
                size={18}
                strokeWidth={2.4}
              />
            </Link>

          </div>

        </div>


        {/* =================================================
            IMAGEN
        ================================================= */}

        <div className="hero-image-wrapper">

          <img
            src={HeroImage}
            alt="Limpieza profesional de muebles"
            className="hero-image"
          />

        </div>

      </div>


      {/* =================================================
          BENEFICIOS
      ================================================= */}

      <div className="hero-benefits-wrapper">

        {/* =================================================
            ONDAS SUPERIORES
        ================================================= */}

        <div
          className="hero-benefits-waves"
          aria-hidden="true"
        >
          <div className="hero-benefits-wave hero-benefits-wave-back"></div>

          <div className="hero-benefits-wave hero-benefits-wave-middle"></div>

          <div className="hero-benefits-wave hero-benefits-wave-front"></div>
        </div>


        {/* =================================================
            CONTENEDOR DE BENEFICIOS
        ================================================= */}

        <div className="hero-benefits-container">

          {benefits.map(({ icon: Icon, title }) => (

            <div
              className="hero-benefit-item"
              key={title}
            >

              <div className="hero-benefit-icon">

                <Icon
                  size={30}
                  strokeWidth={1.9}
                />

              </div>

              <span>
                {title}
              </span>

            </div>

          ))}

        </div>

      </div>


      {/* =================================================
          ONDAS INFERIORES
      ================================================= */}

      <div
        className="hero-waves"
        aria-hidden="true"
      >

        <div className="hero-wave hero-wave-back"></div>

        <div className="hero-wave hero-wave-middle"></div>

        <div className="hero-wave hero-wave-front"></div>

      </div>

    </section>
  )
}

export default Hero