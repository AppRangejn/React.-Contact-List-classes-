import { Component } from 'react'
import './App.css'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'

export class App extends Component {
  
  state = {
    contacts: [],
    contactForEdit: this.createEmptyContact(),
  }

  createEmptyContact() {
  return {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  }
}

  componentDidMount(){
    const contacts = JSON.parse(localStorage.getItem('contacts'))

    if(!contacts){
      this.setState({contacts:[]})
    }
    else{
      this.setState({contacts:[...contacts]})
    }
  }

  saveToStorage(contacts){
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }

  deleteContact = (id) => {
    const contacts = [...this.state.contacts.filter((contact) => contact.id !== id)]

    this.setState({ contacts })
    this.saveToStorage(contacts)
  }

  saveContact = (contact) => {
    if (!contact.id) {
      this.createContact(contact)
    } else {
      this.updateContact(contact)
    }
  }

  addNewContact = () => {
    this.setState({
      contactForEdit: this.createEmptyContact(),
    })
  }

  selectContact = (contact) => {
    this.setState({
      contactForEdit: contact,
    })
  }

  createContact(contact) {
    contact.id = Date.now()
    const contacts = [...this.state.contacts, contact]

    this.saveToStorage(contacts)
    this.setState({
      contacts,
      contactForEdit: this.createEmptyContact(),
    })
  }

  updateContact(contact) {
  this.setState((state) => {
    const contacts = state.contacts.map((item) =>
      item.id === contact.id ? contact : item
    )
    return {
      contacts,
      contactForEdit: contact, 
    }
  }, () => this.saveToStorage(this.state.contacts))
}
  
  render() {
    return (
      <div className="App">
        <div className="contact-list-container">
          <div className="box-title">Contact list</div>
          <div className="contact-box">
            <ContactList
              contacts={this.state.contacts}
              onDelete={this.deleteContact}
              onAddContact={this.addNewContact}
              onEditContact={this.selectContact}
            />
            <ContactForm
              contactForEdit={this.state.contactForEdit}
              onSubmit={this.saveContact}
              onDelete={this.deleteContact}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App