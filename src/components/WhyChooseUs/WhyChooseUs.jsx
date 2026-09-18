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
  ¿Por qué contratar nuestros
  <br />
  servicios de limpieza?
</h2>

          <p className="why-description">
            Tus muebles acompañan los momentos más importantes de tu hogar, y con el tiempo acumulan manchas, polvo y olores que afectan su frescura. Nuestro servicio de limpieza profunda está pensado para renovarlos con cuidado, eliminando suciedad sin maltratar las telas. Más que limpiar, buscamos que vuelvas a sentir la comodidad, frescura y tranquilidad de un espacio verdaderamente limpio.
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