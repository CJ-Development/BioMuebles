import {
  ShieldCheck,
  Leaf,
  Settings,
  House,
} from 'lucide-react'

import './Benefits.css'

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

function Benefits() {
  return (
    <section className="benefits">

      {/* Ondas decorativas superiores */}
      <div
        className="benefits-waves"
        aria-hidden="true"
      >
        <div className="benefits-wave benefits-wave-back"></div>

        <div className="benefits-wave benefits-wave-middle"></div>

        <div className="benefits-wave benefits-wave-front"></div>
      </div>

      <div className="benefits-container">

        {benefits.map(({ icon: Icon, title }) => (
          <div
            className="benefit-item"
            key={title}
          >

            <div className="benefit-icon">
              <Icon
                size={30}
                strokeWidth={1.9}
              />
            </div>

            <span>{title}</span>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Benefits