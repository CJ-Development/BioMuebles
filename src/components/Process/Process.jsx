import {
  CalendarCheck,
  SearchCheck,
  Sparkles,
  Smile,
} from 'lucide-react'

import './Process.css'

const steps = [
  {
    number: '01',
    icon: CalendarCheck,
    title: 'Agenda',
    text: 'Contáctanos y agenda el servicio que necesitas.',
  },
  {
    number: '02',
    icon: SearchCheck,
    title: 'Evaluamos',
    text: 'Revisamos el tipo de superficie y sus necesidades.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Limpiamos',
    text: 'Aplicamos técnicas y equipos especializados.',
  },
  {
    number: '04',
    icon: Smile,
    title: 'Disfruta',
    text: 'Recibe tus espacios limpios, frescos y renovados.',
  },
]

function Process() {
  return (
    <section className="process-section">
      {/* Burbujas flotantes */}
      <span className="process-bubble process-bubble-1"></span>
      <span className="process-bubble process-bubble-2"></span>
      <span className="process-bubble process-bubble-3"></span>
      <span className="process-bubble process-bubble-4"></span>
      <span className="process-bubble process-bubble-5"></span>
      <span className="process-bubble process-bubble-6"></span>
      <span className="process-bubble process-bubble-7"></span>
      <span className="process-bubble process-bubble-8"></span>
      <span className="process-bubble process-bubble-9"></span>
      <span className="process-bubble process-bubble-10"></span>
      <span className="process-bubble process-bubble-11"></span>
      <span className="process-bubble process-bubble-12"></span>

      <div className="process-container">

        <div className="process-heading">
          <span>ASÍ DE FÁCIL</span>
          <h2>Tu limpieza en 4 pasos</h2>
        </div>

        <div className="process-grid">
          {steps.map(({ number, icon: Icon, title, text }) => (
            <article className="process-step" key={number}>

              <div className="process-number">
                {number}
              </div>

              <div className="process-icon">
                <Icon size={30} strokeWidth={1.8} />
              </div>

              <h3>{title}</h3>

              <p>{text}</p>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Process