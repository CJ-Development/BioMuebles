import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import BeforeImage from '../../assets/before-after/Antes.png'
import AfterImage from '../../assets/before-after/Despues.png'
import './BeforeAfter.css'

function BeforeAfter() {
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [containerWidth, setContainerWidth] = useState(750)
  const containerRef = useRef(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPosition(percentage)
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const handleTouchMove = (e) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPosition(percentage)
  }

  const handleClick = (e) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPosition(percentage)
  }

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false)
    const handleGlobalTouchEnd = () => setIsDragging(false)

    window.addEventListener('mouseup', handleGlobalMouseUp)
    window.addEventListener('touchend', handleGlobalTouchEnd)

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp)
      window.removeEventListener('touchend', handleGlobalTouchEnd)
    }
  }, [])

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)

    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  return (
    <section className="before-after-section">
      {/* Burbujas flotantes */}
      <span className="page-bubble bubble-1"></span>
      <span className="page-bubble bubble-2"></span>
      <span className="page-bubble bubble-3"></span>
      <span className="page-bubble bubble-4"></span>
      <span className="page-bubble bubble-5"></span>
      <span className="page-bubble bubble-6"></span>
      <span className="page-bubble bubble-7"></span>
      <span className="page-bubble bubble-8"></span>
      <span className="page-bubble bubble-9"></span>
      <span className="page-bubble bubble-10"></span>
      <span className="page-bubble bubble-11"></span>
      <span className="page-bubble bubble-12"></span>
      <span className="page-bubble bubble-13"></span>
      <span className="page-bubble bubble-14"></span>
      <span className="page-bubble bubble-15"></span>
      <span className="page-bubble bubble-16"></span>
      <span className="page-bubble bubble-17"></span>
      <span className="page-bubble bubble-18"></span>
      <span className="page-bubble bubble-19"></span>
      <span className="page-bubble bubble-20"></span>

      <div className="before-after-container">

        <div className="before-after-intro">
          <span>RESULTADOS QUE HABLAN POR SÍ SOLOS</span>

          <h2>
            Antes y después
          </h2>

          <p>
            Así se ve la diferencia de un servicio profesional.
          </p>
        </div>

        <div
          className="comparison-container"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onClick={handleClick}
        >

          {/* Imagen Después (fondo - visible en la derecha) */}
          <img
            src={AfterImage}
            alt="Después"
            className="after-image"
          />

          {/* Imagen Antes (visible en la izquierda) */}
          <img
            src={BeforeImage}
            alt="Antes"
            className="before-image"
            style={{
              clipPath: `inset(0 ${100 - position}% 0 0)`,
              WebkitClipPath: `inset(0 ${100 - position}% 0 0)`
            }}
          />

          {/* Divisor */}
          <div
            className="divider"
            style={{ left: `${position}%` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div className="drag-handle">
              <ChevronLeft size={16} />
              <ChevronRight size={16} />
            </div>
          </div>

          {/* Etiqueta Antes */}
          <div className="label before-label">ANTES</div>

          {/* Etiqueta Después */}
          <div className="label after-label">DESPUÉS</div>

        </div>

      </div>
    </section>
  )
}

export default BeforeAfter