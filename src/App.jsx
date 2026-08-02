import { useState, useEffect } from 'react'
import './App.css'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import api from './api/contact-service'

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
    api.get('/').then(({ data }) => {
        setContacts(data)
      })
  }, [])


  const createContact = (contact) => { 
    const {id, ...newContact} = contact // eslint-disable-line no-unused-vars

    api.post('/', newContact).then(({data}) => {
      const newContacts = [...contacts, data]
      setContacts(newContacts)
      setContactForEdit(createEmptyContact())
    })
  }

  const updateContact = (contact) => {
    api.put(`/${contact.id}`, contact).then(({data}) => {
      const newContacts = contacts.map(item =>
      item.id === data.id ? data : item
      )

      setContacts(newContacts)
      setContactForEdit(contact)
    })
  }

  const saveContact = (contact) => {
    if (!contact.id) {
      createContact(contact)
    } else {
      updateContact(contact)
    }
  }

  const deleteContact = (id) => {
    api.delete(`/${id}`).then(() => {
      const newContacts = contacts.filter(contact => contact.id !== id)
      setContacts(newContacts)
      setContactForEdit(createEmptyContact())
    })
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