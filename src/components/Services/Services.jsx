import {
  Armchair,
  BedDouble,
  Waves,
  PanelsTopLeft,
  CarFront,
  Sofa,
  PawPrint,
  CircleDot,
  ArrowRight,
  Wrench,
} from 'lucide-react'

import Sofas from '../../assets/services/Sofas.png'
import Colchones from '../../assets/services/Colchones.png'

import './Services.css'

const services = [
  {
    title: 'Lavado de Muebles',
    description:
      'Eliminamos manchas, bacterias y malos olores, devolviendo la frescura a tus muebles.',
    icon: Armchair,
    image: Sofas,
  },
  {
    title: 'Lavado de Colchones',
    description:
      'Higienizamos y eliminamos ácaros, manchas y bacterias para un descanso más saludable.',
    icon: BedDouble,
    image: Colchones,
  },
  {
    title: 'Lavado de Alfombras',
    description:
      'Recuperamos la frescura, el color y la limpieza de tus alfombras y tapetes.',
    icon: Waves,
  },
  {
    title: 'Lavado de Cortinas y Rollers',
    description:
      'Eliminamos el polvo y la suciedad para que tus cortinas luzcan como nuevas.',
    icon: PanelsTopLeft,
  },
  {
    title: 'Instalación de Cortinas',
    description:
      'Instalamos cortinas y rollers con profesionalismo, garantizando un acabado perfecto.',
    icon: Wrench,
    isNew: true,
  },
  {
    title: 'Lavado de Vehículos',
    description:
      'Limpiamos el interior y exterior de tu vehículo, dejándolo como nuevo.',
    icon: CarFront,
  },
  {
    title: 'Lavado de Sillas',
    description:
      'Mantenemos tus sillas limpias, higiénicas y en perfecto estado.',
    icon: Sofa,
  },
  {
    title: 'Limpieza de Artículos para Mascotas',
    description:
      'Cuidamos sus espacios y accesorios con productos seguros y efectivos.',
    icon: PawPrint,
  },
  {
    title: 'Limpieza de Tapicería',
    description:
      'Renovamos y protegemos la tapicería de tus muebles, sillas, sillas de oficina y más.',
    icon: CircleDot,
  },
]

function Services() {
  return (
    <section className="services-section" id="servicios">
      {/* Burbujas decorativas */}
      <span className="services-bubble services-bubble-1"></span>
      <span className="services-bubble services-bubble-2"></span>
      <span className="services-bubble services-bubble-3"></span>
      <span className="services-bubble services-bubble-4"></span>
      <span className="services-bubble services-bubble-5"></span>
      <span className="services-bubble services-bubble-6"></span>
      <span className="services-bubble services-bubble-7"></span>
      <span className="services-bubble services-bubble-8"></span>
      <span className="services-bubble services-bubble-9"></span>
      <span className="services-bubble services-bubble-10"></span>
      <span className="services-bubble services-bubble-11"></span>
      <span className="services-bubble services-bubble-12"></span>
      <span className="services-bubble services-bubble-13"></span>
      <span className="services-bubble services-bubble-14"></span>
      <span className="services-bubble services-bubble-15"></span>

      <div className="services-container">

        <div className="section-heading">
          <span className="section-eyebrow">
            <span>‹</span>
            NUESTROS SERVICIOS
            <span>›</span>
          </span>

          <h2>Servicios profesionales de limpieza</h2>

          <p>
            Soluciones especializadas para mantener tus espacios impecables, higiénicos y con una frescura duradera. En Biomuebles trabajamos con equipos profesionales, productos seguros y técnicas de limpieza certificadas para garantizar resultados superiores.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article className="service-card" key={service.title}>

                {/* Etiqueta Nuevo */}
                {service.isNew && (
                  <div className="service-new-badge">Nuevo</div>
                )}

                {/* Burbujas animadas */}
                <span className="service-bubble service-bubble-1"></span>
                <span className="service-bubble service-bubble-2"></span>
                <span className="service-bubble service-bubble-3"></span>
                <span className="service-bubble service-bubble-4"></span>
                <span className="service-bubble service-bubble-5"></span>

                <div className="service-image">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                    />
                  ) : (
                    <div className="service-image-placeholder">
                      <Icon size={54} strokeWidth={1.4} />
                    </div>
                  )}

                  <div className="service-icon">
                    <Icon size={25} strokeWidth={1.9} />
                  </div>
                </div>

                <div className="service-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <a
                    href={`https://wa.me/3125278094?text=Hola, me interesa obtener información sobre el servicio de ${service.title}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar servicio
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Services