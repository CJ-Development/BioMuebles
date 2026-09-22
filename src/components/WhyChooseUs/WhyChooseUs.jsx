import {
  Leaf,
  Sparkles,
  UserRoundCheck,
  ShieldCheck,
} from 'lucide-react'

import Sofas from '../../assets/services/Sofas.png'

import './WhyChooseUs.css'

const reasons = [
  {
    icon: Leaf,
    title: 'Productos biodegradables',
  },
  {
    icon: Sparkles,
    title: 'Resultados visibles',
  },
  {
    icon: UserRoundCheck,
    title: 'Personal capacitado',
  },
  {
    icon: ShieldCheck,
    title: 'Experiencia y confianza',
  },
]

function WhyChooseUs() {
  return (
    <section className="why-section">
      {/* Burbujas decorativas */}
      <span className="why-bubble why-bubble-1"></span>
      <span className="why-bubble why-bubble-2"></span>
      <span className="why-bubble why-bubble-3"></span>

      <div className="why-container">

        <div className="why-content">
<h2>
  ¿Por qué elegir los servicios de BioMuebles?
</h2>

          <p className="why-description">
            1. Tus muebles, colchones, cortinas y espacios acompañan los momentos más importantes de tu hogar. Con el tiempo, acumulan manchas, polvo, ácaros y olores que afectan su frescura y bienestar. En BioMuebles realizamos limpieza e higienización profesional para renovar cada superficie con cuidado, eliminando la suciedad sin maltratar las telas ni los materiales.
          </p>

          <p className="why-description">
            2. Además, complementamos la transformación de tus espacios con nuestro servicio de fabricación, instalación y mantenimiento de cortinas, pensado para armonizar cada ambiente. Más que limpiar, buscamos que vuelvas a sentir la comodidad, frescura y tranquilidad de un hogar verdaderamente renovado.
          </p>

          <div className="why-reasons">
            {reasons.map(({ icon: Icon, title }) => (
              <div className="why-reason" key={title}>
                <Icon size={28} strokeWidth={1.8} />
                <span>{title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="why-image">
          <img
            src={Sofas}
            alt="Limpieza profesional de muebles"
          />

          <div className="why-message">
            Tu bienestar
            <br />
            también importa
          </div>
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs