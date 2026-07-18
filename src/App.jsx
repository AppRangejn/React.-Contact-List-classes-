import React, { Component } from 'react'
import './App.css'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'

export class App extends Component {
    constructor(props) {
    super(props);

    const savedContacts = localStorage.getItem('contacts');

    this.state = {
      contacts: savedContacts
        ? JSON.parse(savedContacts)
        : [
            { id: 1, firstName: "Denis", lastName: "Uvarenko", email: "aata195532@gmail.com", phone: "380680742204" },
            { id: 2, firstName: "Oleh", lastName: "Malutin", email: "oleh@gmail.com", phone: "380975271445" }
          ],
      selectedContact: null,
      formFirstName: '',
      formLastName: '',
      formEmail: '',
      formPhone: ''
    };

    this.setFormFirstName = this.setFormFirstName.bind(this);
    this.setFormLastName = this.setFormLastName.bind(this);
    this.setFormEmail = this.setFormEmail.bind(this);
    this.setFormPhone = this.setFormPhone.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.selectContact = this.selectContact.bind(this);
    this.saveContact = this.saveContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  setFormFirstName(value) {
    this.setState({ formFirstName: value });
  }

  setFormLastName(value) {
    this.setState({ formLastName: value });
  }

  setFormEmail(value) {
    this.setState({ formEmail: value });
  }

  setFormPhone(value) {
    this.setState({ formPhone: value });
  }

  clearForm() {
    this.setState({
      formFirstName: '',
      formLastName: '',
      formEmail: '',
      formPhone: ''
    });
  }

  selectContact(contact) {
    this.setState({
      selectedContact: contact,
      formFirstName: contact.firstName,
      formLastName: contact.lastName,
      formEmail: contact.email,
      formPhone: contact.phone
    });
  }

  saveContact() {
    const { formFirstName, formLastName, formEmail, formPhone, selectedContact, contacts } = this.state;

    if (!formFirstName || !formLastName || !formEmail || !formPhone) return;

    if (selectedContact) {
      const updatedContacts = contacts.map(contact => {
        if (contact.id === selectedContact.id) {
          return {
            id: contact.id,
            firstName: formFirstName,
            lastName: formLastName,
            email: formEmail,
            phone: formPhone
          };
        }
        return contact;
      });

      this.setState({ contacts: updatedContacts });
    } else {
      const newContact = {
        id: Date.now(),
        firstName: formFirstName,
        lastName: formLastName,
        email: formEmail,
        phone: formPhone
      };

      this.setState({
        contacts: contacts.concat(newContact),
        selectedContact: null
      }, this.clearForm);
    }
  }

  deleteContact(id) {
    const { contacts, selectedContact } = this.state;
    const updatedContacts = contacts.filter(c => c.id !== id);

    this.setState({ contacts: updatedContacts });

    if (selectedContact && selectedContact.id === id) {
      this.setState({ selectedContact: null });
      this.clearForm();
    }
  }
  
  render() {
    const { contacts, selectedContact, formFirstName, formLastName, formEmail, formPhone } = this.state;
    return (
      <div className="App">
        <div className="contact-list-container">
          <div className="box-title">Contact list</div>
          <div className="contact-box">
            <ContactList
              contacts={contacts}
              onSelectContact={this.selectContact}
              onDeleteContact={this.deleteContact}
            />
            <ContactForm
              firstName={formFirstName}
              setFirstName={this.setFormFirstName}
              lastName={formLastName}
              setLastName={this.setFormLastName}
              email={formEmail}
              setEmail={this.setFormEmail}
              phone={formPhone}
              setPhone={this.setFormPhone}
            />
          </div>
          <div className="button-panel">
            <button className="action-btn" onClick={() => { this.setState({ selectedContact: null }); this.clearForm(); }}>New</button>
            <button className="action-btn" onClick={this.saveContact}>Save</button>
            {selectedContact && (
              <button className="action-btn" onClick={() => this.deleteContact(selectedContact.id)}>Delete</button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App