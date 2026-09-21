import { useState } from 'react'
import { X } from 'lucide-react'
import './ServiceModal.css'

function ServiceModal({ isOpen, onClose, whatsappNumber, defaultMessage }) {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: defaultMessage || 'Hola, me interesa obtener información sobre sus servicios.'
  })

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const message = `*Solicitud de Servicio*\n\n*Nombre:* ${formData.nombre}\n*Teléfono:* ${formData.telefono}\n*Email:* ${formData.email}\n*Mensaje:* ${formData.mensaje}`
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    
    window.open(whatsappUrl, '_blank')
    onClose()
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">
          <X size={24} />
        </button>

        <h2 className="modal-title">Solicitar Servicio</h2>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre *</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              placeholder="Tu nombre completo"
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono *</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              placeholder="Tu número de teléfono"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows={4}
              placeholder="Cuéntanos más sobre lo que necesitas..."
            />
          </div>

          <button type="submit" className="modal-submit">
            Enviar a WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}

export default ServiceModal
