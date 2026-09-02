import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './ContactForm.css'
import { addContact, updateContact, delContact, resetContact } from '../../store/slices/contactSlice'
import { DEFAULT_CONTACT } from '../../constants/constants'


function ContactForm() {
  const dispatch = useDispatch()
  const selectedContact = useSelector((state) => state.contactList.selectedContact)

  const [formData, setFormData] = useState(selectedContact || DEFAULT_CONTACT)

  useEffect(() => { 
    setFormData(selectedContact || DEFAULT_CONTACT) // eslint-disable-line
  }, [selectedContact])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleClearField = (e) => {
    const { name } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: ''
    }))
  }

  const createContact = () => {
      dispatch(addContact(formData))
      
  }

  const handleUpdateContact = () => {
      dispatch(updateContact(formData))
  }

  const handleSubmit = () => {
    if(!formData.id) {
      createContact()
    } else {
      handleUpdateContact()
    }
  }

  const handleDelete = (e) => {
      e.preventDefault()
        dispatch(delContact(formData.id))
        dispatch(resetContact())
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-form">
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}/>
          <button type="button" name="firstName" className="clear-input-btn" onClick={handleClearField}>X</button>
        </div>
        <div className="input-form">
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
          <button type="button" name="lastName" className="clear-input-btn" onClick={handleClearField}>X</button>
        </div>
        <div className="input-form">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <button type="button" name="email" className="clear-input-btn" onClick={handleClearField}>X</button>
        </div>
        <div className="input-form">
          <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
          <button type="button" name="phone" className="clear-input-btn" onClick={handleClearField}>X</button>
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