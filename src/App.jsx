import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
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

  const [contacts, setContacts] = useState([])
  const [contactForEdit, setContactForEdit] = useState(createEmptyContact)

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts')
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts)) // eslint-disable-line
    }
  }, [])

  const saveToLocalStorage = (updatedContacts) => {
    localStorage.setItem('contacts', JSON.stringify(updatedContacts))
  }

  const createContact = (contact) => {
    const newContact = { ...contact, id: nanoid() }
    const newContacts = [...contacts, newContact]

    setContacts(newContacts)
    saveToLocalStorage(newContacts)
    setContactForEdit(createEmptyContact())
  }

  const updateContact = (contact) => {
    const newContacts = contacts.map(item =>
      item.id === contact.id ? contact : item
    )

    setContacts(newContacts)
    saveToLocalStorage(newContacts)
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
    const newContacts = contacts.filter(contact => contact.id !== id)

    setContacts(newContacts)
    saveToLocalStorage(newContacts)
    setContactForEdit(createEmptyContact())
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