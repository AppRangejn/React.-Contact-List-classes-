import { useState, useEffect } from 'react'
import './ContactForm.css'

function ContactForm({ contactForEdit, onSubmit, onDelete }) {

  const [formData, setFormData] = useState(contactForEdit)

  useEffect(() => {
    setFormData(contactForEdit)
  }, [contactForEdit])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleClearField = (fieldName) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: ''
    }))
  }

  const handleSubmit = () => {
    const { firstName, lastName, email, phone } = formData

    const isValid = firstName.trim() && lastName.trim() && email.trim() && phone.trim()

    if (isValid) {
      onSubmit(formData)
    }
  }

  const handleDelete = () => {
    if (formData.id) {
      onDelete(formData.id)
    }
  }

  return (
    <div className="contact-form">
        <div className="input-form">
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}/>
          <button className="clear-input-btn" onClick={() => handleClearField('firstName')}>X</button>
        </div>
        <div className="input-form">
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
          <button className="clear-input-btn" onClick={() => handleClearField('lastName')}>X</button>
        </div>
        <div className="input-form">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <button className="clear-input-btn" onClick={() => handleClearField('email')}>X</button>
        </div>
        <div className="input-form">
          <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
          <button className="clear-input-btn" onClick={() => handleClearField('phone')}>X</button>
        </div>
        <div className="button-panel">
          <button className="action-btn" onClick={handleSubmit}>Save</button>
          {formData.id && (
            <button className="action-btn" onClick={handleDelete}>Delete</button>
          )}
        </div>
      </div>
  )
}

export default ContactForm