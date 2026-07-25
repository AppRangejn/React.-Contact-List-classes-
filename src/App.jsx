import { useState, useEffect } from 'react'
import './App.css'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'

const createEmptyContact = () => ({
  id: null,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
})

function App() {

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts')
    return savedContacts ? JSON.parse(savedContacts) : []
  })

  const [contactForEdit, setContactForEdit] = useState(createEmptyContact)

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const createContact = (contact) => {
    const newContact = { ...contact, id: Date.now() }
    setContacts(prevContacts => [...prevContacts, newContact])
    setContactForEdit(createEmptyContact())
  }

  const updateContact = (contact) => {
    setContacts(prevContacts =>
      prevContacts.map(item => (item.id === contact.id ? contact : item))
    )
    setContactForEdit(contact)
  }

  const saveContact = (contact) => {
    if (!contact.id) {
      createContact(contact)
    } else {
      updateContact(contact)
    }
  }

  const deleteContact = (id) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id))
    
    if (contactForEdit.id === id) {
      setContactForEdit(createEmptyContact())
    }
  }

  const addNewContact = () => {
    setContactForEdit(createEmptyContact())
  }

  const selectContact = (contact) => {
    setContactForEdit(contact)
  }

  return (
    <div className="App">
      <div className="contact-list-container">
        <div className="box-title">Contact list</div>
        <div className="contact-box">
          <ContactList
            contacts={contacts}
            onDelete={deleteContact}
            onAddContact={addNewContact}
            onEditContact={selectContact}
          />
          <ContactForm
            contactForEdit={contactForEdit}
            onSubmit={saveContact}
            onDelete={deleteContact}
          />
        </div>
      </div>
    </div>
  )
}

export default App