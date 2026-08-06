import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './ContactForm.css'
import api from '../../api/contact-service'
import { addContactAction, updateContactAction, deleteContactAction, resetContactAction } from '../../store/actions/contactActions'

function ContactForm() {
  const dispatch = useDispatch()
  const contactForEdit = useSelector((state) => state.contactsList.contactForEdit)

  const [formData, setFormData] = useState(contactForEdit)

  useEffect(() => { 
    setFormData(contactForEdit) // eslint-disable-line
  }, [contactForEdit])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleClearField = (e, fieldName) => {
    e.preventDefault()
    setFormData(prev => ({
      ...prev,
      [fieldName]: ''
    }))
  }

  const createContact = () => {
    api.post('/contacts', formData).then(({ data }) => {
      dispatch(addContactAction(data))
      dispatch(resetContactAction())
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const updateContact = () => {
    api.put(`/contacts/${formData.id}`, formData).then(({ data }) => {
      dispatch(updateContactAction(data))
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!formData.id) {
      createContact()
    } else {
      updateContact()
    }
  }

  const handleDelete = (e) => {
      e.preventDefault()
      api.delete(`/contacts/${formData.id}`).then(() => {
        dispatch(deleteContactAction(formData.id))
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-form">
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}/>
          <button type="button" className="clear-input-btn" onClick={(e) => handleClearField(e, 'firstName')}>X</button>
        </div>
        <div className="input-form">
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
          <button type="button" className="clear-input-btn" onClick={(e) => handleClearField(e, 'lastName')}>X</button>
        </div>
        <div className="input-form">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <button type="button" className="clear-input-btn" onClick={(e) => handleClearField(e, 'email')}>X</button>
        </div>
        <div className="input-form">
          <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
          <button type="button" className="clear-input-btn" onClick={(e) => handleClearField(e, 'phone')}>X</button>
        </div>
        <div className="button-panel">
          <button type="submit" className="action-btn">Save</button>
          {formData.id && (
            <button type="button" className="action-btn" onClick={handleDelete}>Delete</button>
          )}
        </div>
      </form>
  )
}

export default ContactForm