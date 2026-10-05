import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import BeforeAfter from '../../components/BeforeAfter/BeforeAfter'
import Process from '../../components/Process/Process'
import Reviews from '../../components/Reviews/Reviews'
import WhatsAppCTA from '../../components/WhatsAppCTA/WhatsAppCTA'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <>
      <main>
        <h1 className="sr-only">
          Limpieza de muebles, limpieza profunda de casa e instalación de cortinas en Colombia
        </h1>
        <Hero />

        <Services />

        <WhyChooseUs />

        <BeforeAfter />

        <Process />

        <Reviews />

        <WhatsAppCTA />
      </main>

      <Footer />
    </>
  )
}

export default Home