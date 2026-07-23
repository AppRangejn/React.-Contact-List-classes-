import { Component } from 'react'
import './ContactList.css'
import ContactItem from '../ContactItem/ContactItem'

export class ContactList extends Component {
  render() {
    const { contacts, onDelete, onAddContact, onEditContact } = this.props
    return (
      <div className="contact-list">
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
            onEdit={onEditContact}
          />
        ))}
        <button className="action-btn" onClick={onAddContact}>New</button>
      </div>
      
    )
  }
}

export default ContactList