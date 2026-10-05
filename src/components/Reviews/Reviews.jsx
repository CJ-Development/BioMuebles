import { useState, useEffect, useRef } from 'react'
import { Star, X, Send, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react'
import { supabase } from '../../lib/supabase'
import './Reviews.css'

function Reviews() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  
  const [formData, setFormData] = useState({
    nombre: '',
    calificacion: 0,
    comentario: ''
  })

  const [formErrors, setFormErrors] = useState({})
  
  const scrollRef = useRef(null)

  // Lógica de carrusel (scroll automático hacia arriba)
  useEffect(() => {
    const el = scrollRef.current
    if (!el || reviews.length === 0) return

    let animationId
    let isHovered = false

    const scrollStep = () => {
      if (!isHovered && el) {
        el.scrollTop += 0.5 // Velocidad del scroll
        // Si llegamos al final del scroll, volver arriba suavemente
        if (el.scrollTop >= el.scrollHeight - el.clientHeight - 1) {
          el.scrollTop = 0
        }
      }
      animationId = requestAnimationFrame(scrollStep)
    }

    animationId = requestAnimationFrame(scrollStep)

    const handleMouseEnter = () => isHovered = true
    const handleMouseLeave = () => isHovered = false
    const handleTouchStart = () => isHovered = true
    const handleTouchEnd = () => isHovered = false

    el.addEventListener('mouseenter', handleMouseEnter)
    el.addEventListener('mouseleave', handleMouseLeave)
    el.addEventListener('touchstart', handleTouchStart, { passive: true })
    el.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      cancelAnimationFrame(animationId)
      if (el) {
         el.removeEventListener('mouseenter', handleMouseEnter)
         el.removeEventListener('mouseleave', handleMouseLeave)
         el.removeEventListener('touchstart', handleTouchStart)
         el.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [reviews])

  // Cargar opiniones al montar el componente
  useEffect(() => {
    loadReviews()
    
    // Suscribirse a cambios en tiempo real
    const channel = supabase
      .channel('opiniones_changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'opiniones'
        },
        (payload) => {
          setReviews(prev => [payload.new, ...prev])
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const loadReviews = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const { data, error } = await supabase
        .from('opiniones')
        .select('*')
        .eq('publicada', true)
        .order('created_at', { ascending: false })
      
      if (error) throw error
      
      setReviews(data || [])
    } catch (err) {
      console.error('Error al cargar opiniones:', err)
      setError('No se pudieron cargar las opiniones. Por favor, intenta más tarde.')
    } finally {
      setLoading(false)
    }
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
    setSubmitSuccess(false)
    setSubmitError(null)
    setFormData({ nombre: '', calificacion: 0, comentario: '' })
    setFormErrors({})
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSubmitSuccess(false)
    setSubmitError(null)
    setFormData({ nombre: '', calificacion: 0, comentario: '' })
    setFormErrors({})
  }

  const handleStarClick = (rating) => {
    setFormData(prev => ({ ...prev, calificacion: rating }))
    setFormErrors(prev => ({ ...prev, calificacion: null }))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setFormErrors(prev => ({ ...prev, [name]: null }))
  }

  const validateForm = () => {
    const errors = {}
    
    if (!formData.nombre.trim()) {
      errors.nombre = 'El nombre es obligatorio'
    } else if (formData.nombre.length > 100) {
      errors.nombre = 'El nombre no puede exceder 100 caracteres'
    }
    
    if (formData.calificacion === 0) {
      errors.calificacion = 'Debes seleccionar una calificación'
    } else if (formData.calificacion < 1 || formData.calificacion > 5) {
      errors.calificacion = 'La calificación debe estar entre 1 y 5'
    }
    
    if (!formData.comentario.trim()) {
      errors.comentario = 'El comentario es obligatorio'
    } else if (formData.comentario.length > 500) {
      errors.comentario = 'El comentario no puede exceder 500 caracteres'
    }
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    try {
      setSubmitting(true)
      setSubmitError(null)
      
      const { data, error } = await supabase
        .from('opiniones')
        .insert({
          nombre: formData.nombre.trim(),
          calificacion: formData.calificacion,
          comentario: formData.comentario.trim(),
          publicada: true
        })
        .select()
      
      if (error) throw error
      
      setSubmitSuccess(true)
      setFormData({ nombre: '', calificacion: 0, comentario: '' })
      
      // Cerrar el modal después de 2 segundos
      setTimeout(() => {
        handleCloseModal()
      }, 2000)
      
    } catch (err) {
      console.error('Error al enviar opinión:', err)
      setSubmitError('No se pudo enviar tu opinión. Por favor, intenta más tarde.')
    } finally {
      setSubmitting(false)
    }
  }

  const renderStars = (rating, interactive = false, onStarClick = null) => {
    return (
      <div className={`stars ${interactive ? 'stars-interactive' : ''}`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={interactive ? 32 : 18}
            className={`star ${star <= rating ? 'star-filled' : 'star-empty'}`}
            onClick={interactive ? () => onStarClick(star) : undefined}
          />
        ))}
      </div>
    )
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
  }

  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0
    const sum = reviews.reduce((acc, review) => acc + review.calificacion, 0)
    return (sum / reviews.length).toFixed(1)
  }

  return (
    <section className="reviews-section" id="opiniones">
      {/* Burbujas decorativas */}
      <span className="reviews-bubble reviews-bubble-1"></span>
      <span className="reviews-bubble reviews-bubble-2"></span>
      <span className="reviews-bubble reviews-bubble-3"></span>
      <span className="reviews-bubble reviews-bubble-4"></span>
      <span className="reviews-bubble reviews-bubble-5"></span>
      <span className="reviews-bubble reviews-bubble-6"></span>

      <div className="reviews-container">
        <div className="section-heading">
          <span className="section-eyebrow">
            <span>‹</span>
            OPINIONES
            <span>›</span>
          </span>

          <h2>Opiniones de nuestros clientes</h2>

          <p>
            Descubre lo que dicen nuestros clientes sobre nuestros servicios de limpieza profesional.
          </p>
        </div>

        {/* Resumen de calificaciones */}
        {reviews.length > 0 && (
          <div className="reviews-summary">
            <div className="summary-rating">
              <div className="average-rating">
                {calculateAverageRating()}
              </div>
              <div className="summary-stars">
                {renderStars(Math.round(calculateAverageRating()))}
              </div>
              <div className="total-reviews">
                {reviews.length} {reviews.length === 1 ? 'opinión' : 'opiniones'}
              </div>
            </div>
          </div>
        )}

        {/* Estado de carga */}
        {loading && (
          <div className="reviews-loading">
            <Loader2 className="spinner" size={32} />
            <p>Cargando opiniones...</p>
          </div>
        )}

        {/* Estado de error */}
        {error && (
          <div className="reviews-error">
            <AlertCircle size={24} />
            <p>{error}</p>
            <button onClick={loadReviews} className="retry-button">
              Intentar de nuevo
            </button>
          </div>
        )}

        {/* Lista de opiniones */}
        {!loading && !error && (
          <div className="reviews-scroller" ref={scrollRef}>
            <div className="reviews-list">
              {reviews.length === 0 ? (
                <div className="no-reviews">
                  <p>Aún no hay opiniones. ¡Sé el primero en dejar la tuya!</p>
                </div>
              ) : (
                reviews.map((review) => (
                  <article key={review.id} className="review-card">
                    <div className="review-header">
                      <div className="review-author">
                        <span className="author-name">{review.nombre}</span>
                        <span className="review-date">{formatDate(review.created_at)}</span>
                      </div>
                      {renderStars(review.calificacion)}
                    </div>
                    <p className="review-comment">{review.comentario}</p>
                  </article>
                ))
              )}
            </div>
          </div>
        )}

        {/* Botón para dejar opinión */}
        <button onClick={handleOpenModal} className="reviews-cta-button">
          Dejar una opinión
        </button>
      </div>

      {/* Modal para dejar opinión */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal} aria-label="Cerrar">
              <X size={24} />
            </button>

            <h2 className="modal-title">Dejar tu opinión</h2>

            {submitSuccess ? (
              <div className="submit-success">
                <CheckCircle2 size={48} />
                <p>¡Gracias por tu opinión!</p>
                <p>Tu comentario ha sido publicado exitosamente.</p>
              </div>
            ) : (
              <form className="modal-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
                    maxLength={100}
                    disabled={submitting}
                  />
                  {formErrors.nombre && (
                    <span className="error-message">{formErrors.nombre}</span>
                  )}
                </div>

                <div className="form-group">
                  <label>Calificación *</label>
                  {renderStars(formData.calificacion, true, handleStarClick)}
                  {formErrors.calificacion && (
                    <span className="error-message">{formErrors.calificacion}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="comentario">Comentario *</label>
                  <textarea
                    id="comentario"
                    name="comentario"
                    value={formData.comentario}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos tu experiencia..."
                    rows={4}
                    maxLength={500}
                    disabled={submitting}
                  />
                  <div className="char-count">
                    {formData.comentario.length}/500
                  </div>
                  {formErrors.comentario && (
                    <span className="error-message">{formErrors.comentario}</span>
                  )}
                </div>

                {submitError && (
                  <div className="submit-error">
                    <AlertCircle size={16} />
                    <span>{submitError}</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  className="modal-submit"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="spinner" size={18} />
                      Publicando...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Publicar opinión
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Reviews
