import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import BeforeAfter from '../../components/BeforeAfter/BeforeAfter'
import Process from '../../components/Process/Process'
import WhatsAppCTA from '../../components/WhatsAppCTA/WhatsAppCTA'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <>
      <main>
        <Hero />

        <Services />

        <WhyChooseUs />

        <BeforeAfter />

        <Process />

        <WhatsAppCTA />
      </main>

      <Footer />
    </>
  )
}

export default Home